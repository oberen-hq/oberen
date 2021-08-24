defmodule Oberon do
  use GenServer

  ## API
  def start_link(child_spec_list) do
    GenServer.start_link(__MODULE__, child_spec_list)
  end

  def list_processes(pid) do
    GenServer.call(pid, :list)
  end

  ## OTP Callbacks
  @impl true
  def init(child_spec_list) do
    Process.flag(:trap_exit, true)
    state = child_spec_list
    |> Enum.map(&start_child/1)
    |> Enum.into(%{})
    {:ok, state}
  end


  @impl true
  def handle_call(:pop, _from, [head | tail]) do
    {:reply, head, tail}
  end

  @impl true
  def handle_cast({:push, element}, state) do
    {:noreply, [element | state]}
  end

  @impl true
  def handle_info({:EXIT, dead_pid, _reason}, state) do
    # State a new process based on the spec we have stored for the dead_pid
    {new_pid, child_spec} = state
    |> Map.get(dead_pid)
    |> start_child()

    # Remove the dead_pid and insert the new_pid with its spec
    new_state = state
    |> Map.delete(dead_pid)
    |> Map.put(new_pid, child_spec)

    {:noreply, new_state}
  end

  ## Private Helper Functions
  defp start_child({module, function, args} = spec) do
    {:ok, pid} = apply(module, function, args)
    Process.link(pid)
    {pid, spec}
  end
end