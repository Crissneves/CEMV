// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("TAB_BAIRRO")]
    public partial class TabBairro
    {
        public TabBairro()
        {
            Clinica = new HashSet<Clinica>();
            Tutor = new HashSet<Tutor>();
            Usuario = new HashSet<Usuario>();
        }

        [Key]
        [Column("BAIRRO_ID")]
        public int BairroId { get; set; }
        [Required]
        [Column("NOME")]
        [StringLength(50)]
        public string Nome { get; set; }
        [Column("CIDADE_ID")]
        public short CidadeId { get; set; }

        [ForeignKey(nameof(CidadeId))]
        [InverseProperty(nameof(TabCidade.TabBairro))]
        public virtual TabCidade Cidade { get; set; }
        [InverseProperty("Bairro")]
        public virtual ICollection<Clinica> Clinica { get; set; }
        [InverseProperty("Bairro")]
        public virtual ICollection<Tutor> Tutor { get; set; }
        [InverseProperty("Bairro")]
        public virtual ICollection<Usuario> Usuario { get; set; }
    }
}