using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace MudSharp.Server.Hubs
{
    public class GameHub : Hub
    {
        public async Task NewMessage(string username, string message)
        {
            await Clients.All.SendAsync("receiveMessage", username, message);
        }

        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
    }
}
