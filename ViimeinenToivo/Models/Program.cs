using System;
using System.Collections.Generic;

namespace ViimeinenToivo.Models
{
    public partial class Program
    {
        public Program()
        {
            NmProgramActivity = new HashSet<NmProgramActivity>();
            Schedule = new HashSet<Schedule>();
        }

        public int ProgramId { get; set; }
        public string Programname { get; set; }

        public ICollection<NmProgramActivity> NmProgramActivity { get; set; }
        public ICollection<Schedule> Schedule { get; set; }
    }
}
