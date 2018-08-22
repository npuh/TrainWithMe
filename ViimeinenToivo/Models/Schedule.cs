using System;
using System.Collections.Generic;

namespace ViimeinenToivo.Models
{
    public partial class Schedule
    {
        public int UserId { get; set; }
        public DateTime Date { get; set; }
        public int ScheduleId { get; set; }
        public int WorkoutId { get; set; }

        public User User { get; set; }
        public Workout Workout { get; set; }
    }
}
