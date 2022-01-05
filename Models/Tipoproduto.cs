﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("TIPOPRODUTO")]
    public partial class Tipoproduto
    {
        public Tipoproduto()
        {
            Produto = new HashSet<Produto>();
        }

        [Key]
        [Column("TIPOPRODUTO_ID")]
        public short TipoprodutoId { get; set; }
        [Required]
        [Column("DESCRICAO")]
        [StringLength(100)]
        public string Descricao { get; set; }

        [InverseProperty("Tipoproduto")]
        public virtual ICollection<Produto> Produto { get; set; }
    }
}