defmodule OberonTest do
  use ExUnit.Case
  doctest Oberon

  test "greets the world" do
    assert Oberon.hello() == :world
  end
end
