defmodule Worker do
  use GenServer

  def init(init_arg) do
      {:ok, init_arg}
    end

  def start_link() do
    GenServer.start_link(__MODULE__, :ok, [])
  end

  def handle_call(message, _from, state) do
    i = String.to_integer(message)
    {:reply, i, state}
  end
end
