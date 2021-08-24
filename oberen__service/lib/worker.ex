defmodule Worker do
  use GenServer

  def init(stack) do
      {:ok, stack}
    end

  def start_link() do
    GenServer.start_link(__MODULE__, :ok, [])
  end
end
