defmodule Chat.Queue do
	use GenServer

	#client side
	def start_link do
		GenServer.start_link(__MODULE__, [], name: :user)
	end

	def get_msgs do
		GenServer.call(:user, :get_msgs)
	end

	def add_msg(msg) do
		GenServer.cast(:user, {:add_msg, msg})
	end

	def get_notifications do
		GenServer.call(:user, :get_notifications)
	end

	def add_notification(notification) do
		GenServer.cast(:user, {:add_notification, notification})
	end

	#server side / callback functions

	def init(msgs) do
		{:ok, msgs}
	end

	def handle_call(:get_msgs, _form, msgs) do
		{:reply, msgs, msgs}
	end

	def handle_call(:get_notifications, _form, notifications) do
		{:reply, notifications, notifications}
	end

	def handle_cast({:add_msg, msg}, msgs) do
		{:noreply, [msg | msgs]}
	end

	def handle_cast({:add_notification, notification}, notifications) do
		{:noreply, [notification | notifications]}
	end

end
