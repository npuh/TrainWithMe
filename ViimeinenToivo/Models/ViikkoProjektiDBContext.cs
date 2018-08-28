using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ViimeinenToivo.Models
{
    public partial class ViikkoProjektiDBContext : DbContext
    {
        public ViikkoProjektiDBContext()
        {
        }

        public ViikkoProjektiDBContext(DbContextOptions<ViikkoProjektiDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Activity> Activity { get; set; }
        public virtual DbSet<NmWorkoutActivity> NmWorkoutActivity { get; set; }
        public virtual DbSet<Schedule> Schedule { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Workout> Workout { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:trainwithme.database.windows.net,1433;Initial Catalog=ViikkoProjektiDB;Persist Security Info=False;User ID=trainer1;Password=Isohaba1;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Activity>(entity =>
            {
                entity.Property(e => e.ActivityId).HasColumnName("Activity_id");

                entity.Property(e => e.Activityname)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Weight).HasColumnType("decimal(18, 0)");
            });

            modelBuilder.Entity<NmWorkoutActivity>(entity =>
            {
                entity.HasKey(e => e.NmWaId);

                entity.ToTable("NM_WorkoutActivity");

                entity.Property(e => e.NmWaId).HasColumnName("NM_WA_id");

                entity.Property(e => e.ActivityId).HasColumnName("Activity_id");

                entity.Property(e => e.WorkoutId).HasColumnName("Workout_id");

                entity.HasOne(d => d.Activity)
                    .WithMany(p => p.NmWorkoutActivity)
                    .HasForeignKey(d => d.ActivityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_NM_ProgramActivity_Activity");

                entity.HasOne(d => d.Workout)
                    .WithMany(p => p.NmWorkoutActivity)
                    .HasForeignKey(d => d.WorkoutId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_NM_ProgramActivity_Program");
            });

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.Property(e => e.ScheduleId).HasColumnName("Schedule_id");

                entity.Property(e => e.Date).HasColumnType("smalldatetime");

                entity.Property(e => e.UserId).HasColumnName("User_id");

                entity.Property(e => e.WorkoutId).HasColumnName("Workout_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Schedule)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Schedule_User1");

                entity.HasOne(d => d.Workout)
                    .WithMany(p => p.Schedule)
                    .HasForeignKey(d => d.WorkoutId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Schedule_Program");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId).HasColumnName("User_id");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<Workout>(entity =>
            {
                entity.Property(e => e.WorkoutId).HasColumnName("Workout_id");

                entity.Property(e => e.Workoutname)
                    .IsRequired()
                    .HasMaxLength(50);
            });
        }
    }
}
