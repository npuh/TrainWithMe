using System;
using System.Collections.Generic;

namespace ViimeinenToivo.Models
{
    public partial class User
    {
        public User()
        {
            Schedule = new HashSet<Schedule>();
        }

        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public byte[] Photo { get; set; }

        public ICollection<Schedule> Schedule { get; set; }
    }
}
