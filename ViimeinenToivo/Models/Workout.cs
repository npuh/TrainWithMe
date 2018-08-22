using System;
using System.Collections.Generic;

namespace ViimeinenToivo.Models
{
    public partial class Workout
    {
        public Workout()
        {
            NmWorkoutActivity = new HashSet<NmWorkoutActivity>();
            Schedule = new HashSet<Schedule>();
        }

        public int WorkoutId { get; set; }
        public string Workoutname { get; set; }

        public ICollection<NmWorkoutActivity> NmWorkoutActivity { get; set; }
        public ICollection<Schedule> Schedule { get; set; }
    }
}
