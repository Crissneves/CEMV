// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("TAB_CIDADE")]
    public partial class TabCidade
    {
        public TabCidade()
        {
            Clinica = new HashSet<Clinica>();
            TabBairro = new HashSet<TabBairro>();
            Tutor = new HashSet<Tutor>();
            Usuario = new HashSet<Usuario>();
        }

        [Key]
        [Column("CIDADE_ID")]
        public short CidadeId { get; set; }
        [Required]
        [Column("NOME")]
        [StringLength(50)]
        public string Nome { get; set; }
        [Column("ESTADO_ID")]
        public byte EstadoId { get; set; }
        [Column("DDDPADRAO")]
        [StringLength(2)]
        public string Dddpadrao { get; set; }

        [ForeignKey(nameof(EstadoId))]
        [InverseProperty(nameof(TabEstado.TabCidade))]
        public virtual TabEstado Estado { get; set; }
        [InverseProperty("Cidade")]
        public virtual ICollection<Clinica> Clinica { get; set; }
        [InverseProperty("Cidade")]
        public virtual ICollection<TabBairro> TabBairro { get; set; }
        [InverseProperty("Cidade")]
        public virtual ICollection<Tutor> Tutor { get; set; }
        [InverseProperty("Cidade")]
        public virtual ICollection<Usuario> Usuario { get; set; }
    }
}