using System;
using System.Collections.Generic;

namespace ViimeinenToivo.Models
{
    public partial class NmProgramActivity
    {
        public int NmPaId { get; set; }
        public int ProgramId { get; set; }
        public int ActivityId { get; set; }

        public Activity Activity { get; set; }
        public Program Program { get; set; }
    }
}
