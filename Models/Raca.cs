﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("RACA")]
    public partial class Raca
    {
        public Raca()
        {
            Animal = new HashSet<Animal>();
        }

        [Key]
        [Column("RACA_ID")]
        public short RacaId { get; set; }
        [Column("ESPECIE_ID")]
        public short EspecieId { get; set; }
        [Required]
        [Column("DESCRICAO")]
        [StringLength(30)]
        public string Descricao { get; set; }

        [ForeignKey(nameof(EspecieId))]
        [InverseProperty("Raca")]
        public virtual Especie Especie { get; set; }
        [InverseProperty("Raca")]
        public virtual ICollection<Animal> Animal { get; set; }
    }
}