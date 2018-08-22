using System;
using System.Collections.Generic;

namespace ViimeinenToivo.Models
{
    public partial class Activity
    {
        public Activity()
        {
            NmWorkoutActivity = new HashSet<NmWorkoutActivity>();
        }

        public string Activityname { get; set; }
        public decimal? Weight { get; set; }
        public int? Reps { get; set; }
        public int? Rounds { get; set; }
        public TimeSpan? Rest { get; set; }
        public int ActivityId { get; set; }
        public TimeSpan? Duration { get; set; }

        public ICollection<NmWorkoutActivity> NmWorkoutActivity { get; set; }
    }
}
