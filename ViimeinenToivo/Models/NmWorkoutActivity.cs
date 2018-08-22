using System;
using System.Collections.Generic;

namespace ViimeinenToivo.Models
{
    public partial class NmWorkoutActivity
    {
        public int NmWaId { get; set; }
        public int WorkoutId { get; set; }
        public int ActivityId { get; set; }

        public Activity Activity { get; set; }
        public Workout Workout { get; set; }
    }
}
