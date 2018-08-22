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
        public virtual DbSet<NmProgramActivity> NmProgramActivity { get; set; }
        public virtual DbSet<Program> Program { get; set; }
        public virtual DbSet<Schedule> Schedule { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server = tcp:trainwithme.database.windows.net, 1433; Initial Catalog = ViikkoProjektiDB; Persist Security Info = False; User ID = sklaö3; Password =Isae882761; MultipleActiveResultSets = False; Encrypt = True; TrustServerCertificate = False; Connection Timeout = 30;");
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

            modelBuilder.Entity<NmProgramActivity>(entity =>
            {
                entity.HasKey(e => e.NmPaId);

                entity.ToTable("NM_ProgramActivity");

                entity.Property(e => e.NmPaId).HasColumnName("NM_PA_id");

                entity.Property(e => e.ActivityId).HasColumnName("Activity_id");

                entity.Property(e => e.ProgramId).HasColumnName("Program_id");

                entity.HasOne(d => d.Activity)
                    .WithMany(p => p.NmProgramActivity)
                    .HasForeignKey(d => d.ActivityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_NM_ProgramActivity_Activity");

                entity.HasOne(d => d.Program)
                    .WithMany(p => p.NmProgramActivity)
                    .HasForeignKey(d => d.ProgramId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_NM_ProgramActivity_Program");
            });

            modelBuilder.Entity<Program>(entity =>
            {
                entity.Property(e => e.ProgramId).HasColumnName("Program_id");

                entity.Property(e => e.Programname)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.Property(e => e.ScheduleId).HasColumnName("Schedule_id");

                entity.Property(e => e.Date).HasColumnType("smalldatetime");

                entity.Property(e => e.ProgramId).HasColumnName("Program_id");

                entity.Property(e => e.UserId).HasColumnName("User_id");

                entity.HasOne(d => d.Program)
                    .WithMany(p => p.Schedule)
                    .HasForeignKey(d => d.ProgramId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Schedule_Program");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Schedule)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Schedule_User1");
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
        }
    }
}
