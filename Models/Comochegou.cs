﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("COMOCHEGOU")]
    public partial class Comochegou
    {
        public Comochegou()
        {
            Animal = new HashSet<Animal>();
            Tutor = new HashSet<Tutor>();
        }

        [Key]
        [Column("COMOCHEGOU_ID")]
        public short ComochegouId { get; set; }
        [Required]
        [Column("DESCRICAO")]
        [StringLength(30)]
        public string Descricao { get; set; }

        [InverseProperty("Comochegou")]
        public virtual ICollection<Animal> Animal { get; set; }
        [InverseProperty("Comochegou")]
        public virtual ICollection<Tutor> Tutor { get; set; }
    }
}