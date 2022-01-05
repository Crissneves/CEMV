﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("COR")]
    public partial class Cor
    {
        public Cor()
        {
            Animal = new HashSet<Animal>();
        }

        [Key]
        [Column("COR_ID")]
        public short CorId { get; set; }
        [Required]
        [Column("DESCRICAO")]
        [StringLength(30)]
        public string Descricao { get; set; }

        [InverseProperty("Cor")]
        public virtual ICollection<Animal> Animal { get; set; }
    }
}