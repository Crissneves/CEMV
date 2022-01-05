﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppCEMV
{
    [Table("TUTOR")]
    public partial class Tutor
    {
        public Tutor()
        {
            Animal = new HashSet<Animal>();
            Tutortelefone = new HashSet<Tutortelefone>();
        }

        [Key]
        [Column("TUTOR_ID")]
        public int TutorId { get; set; }
        [Required]
        [Column("NOME")]
        [StringLength(150)]
        public string Nome { get; set; }
        [Column("TIPODOCUMENTO")]
        public byte? Tipodocumento { get; set; }
        [Column("NRODOCUMENTO")]
        [StringLength(20)]
        public string Nrodocumento { get; set; }
        [Column("TIPOLOGRADOURO_ID")]
        public byte? TipologradouroId { get; set; }
        [Column("LOGRADOURO")]
        [StringLength(150)]
        public string Logradouro { get; set; }
        [Column("NUMERO")]
        [StringLength(10)]
        public string Numero { get; set; }
        [Column("COMPLEMENTO")]
        [StringLength(50)]
        public string Complemento { get; set; }
        [Column("BAIRRO_ID")]
        public int? BairroId { get; set; }
        [Column("CIDADE_ID")]
        public short? CidadeId { get; set; }
        [Column("CEP")]
        [StringLength(10)]
        public string Cep { get; set; }
        [Column("ESTADO_ID")]
        public byte? EstadoId { get; set; }
        [Column("EMAIL")]
        [StringLength(50)]
        public string Email { get; set; }
        [Column("PROFISSAO")]
        [StringLength(50)]
        public string Profissao { get; set; }
        [Column("OBSERVACOES")]
        public string Observacoes { get; set; }
        [Column("DATACADASTRO", TypeName = "datetime")]
        public DateTime? Datacadastro { get; set; }
        [Column("INDICADORATIVO")]
        public bool? Indicadorativo { get; set; }
        [Column("COMOCHEGOU_ID")]
        public short? ComochegouId { get; set; }
        [Column("USUARIOCADASTRO_ID")]
        public short? UsuariocadastroId { get; set; }
        [Column("USUARIOPREFERENCIA_ID")]
        public short? UsuariopreferenciaId { get; set; }
        [Column("CLINICA_ID")]
        public short? ClinicaId { get; set; }
        [Column("PROFISSAO_ID")]
        public short? ProfissaoId { get; set; }

        [ForeignKey(nameof(BairroId))]
        [InverseProperty(nameof(TabBairro.Tutor))]
        public virtual TabBairro Bairro { get; set; }
        [ForeignKey(nameof(CidadeId))]
        [InverseProperty(nameof(TabCidade.Tutor))]
        public virtual TabCidade Cidade { get; set; }
        [ForeignKey(nameof(ClinicaId))]
        [InverseProperty("Tutor")]
        public virtual Clinica Clinica { get; set; }
        [ForeignKey(nameof(ComochegouId))]
        [InverseProperty("Tutor")]
        public virtual Comochegou Comochegou { get; set; }
        [ForeignKey(nameof(EstadoId))]
        [InverseProperty(nameof(TabEstado.Tutor))]
        public virtual TabEstado Estado { get; set; }
        [ForeignKey(nameof(ProfissaoId))]
        [InverseProperty("Tutor")]
        public virtual Profissao ProfissaoNavigation { get; set; }
        [ForeignKey(nameof(UsuariocadastroId))]
        [InverseProperty(nameof(Usuario.TutorUsuariocadastro))]
        public virtual Usuario Usuariocadastro { get; set; }
        [ForeignKey(nameof(UsuariopreferenciaId))]
        [InverseProperty(nameof(Usuario.TutorUsuariopreferencia))]
        public virtual Usuario Usuariopreferencia { get; set; }
        [InverseProperty("Tutor")]
        public virtual ICollection<Animal> Animal { get; set; }
        [InverseProperty("Tutor")]
        public virtual ICollection<Tutortelefone> Tutortelefone { get; set; }
    }
}