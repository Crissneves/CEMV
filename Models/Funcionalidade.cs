// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("FUNCIONALIDADE")]
    public partial class Funcionalidade
    {
        public Funcionalidade()
        {
            Funcionalidadeperfil = new HashSet<Funcionalidadeperfil>();
            Funcionalidadeusuario = new HashSet<Funcionalidadeusuario>();
        }

        [Key]
        [Column("FUNCIONALIDADE_ID")]
        public int FuncionalidadeId { get; set; }
        [Column("NOME")]
        [StringLength(100)]
        public string Nome { get; set; }
        [Column("DESCRICAO")]
        [StringLength(255)]
        public string Descricao { get; set; }
        [Column("ITEMMENU")]
        [StringLength(50)]
        public string Itemmenu { get; set; }

        [InverseProperty("Funcionalidade")]
        public virtual ICollection<Funcionalidadeperfil> Funcionalidadeperfil { get; set; }
        [InverseProperty("Funcionalidade")]
        public virtual ICollection<Funcionalidadeusuario> Funcionalidadeusuario { get; set; }
    }
}