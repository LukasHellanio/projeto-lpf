if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var throwCCE = Kotlin.throwCCE;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Paciente(nome, cpf, idade, genero, vacinado) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
    this.genero = genero;
    this.vacinado = vacinado;
  }
  Paciente.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paciente',
    interfaces: []
  };
  Paciente.prototype.component1 = function () {
    return this.nome;
  };
  Paciente.prototype.component2 = function () {
    return this.cpf;
  };
  Paciente.prototype.component3 = function () {
    return this.idade;
  };
  Paciente.prototype.component4 = function () {
    return this.genero;
  };
  Paciente.prototype.component5 = function () {
    return this.vacinado;
  };
  Paciente.prototype.copy_1pfcl3$ = function (nome, cpf, idade, genero, vacinado) {
    return new Paciente(nome === void 0 ? this.nome : nome, cpf === void 0 ? this.cpf : cpf, idade === void 0 ? this.idade : idade, genero === void 0 ? this.genero : genero, vacinado === void 0 ? this.vacinado : vacinado);
  };
  Paciente.prototype.toString = function () {
    return 'Paciente(nome=' + Kotlin.toString(this.nome) + (', cpf=' + Kotlin.toString(this.cpf)) + (', idade=' + Kotlin.toString(this.idade)) + (', genero=' + Kotlin.toString(this.genero)) + (', vacinado=' + Kotlin.toString(this.vacinado)) + ')';
  };
  Paciente.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nome) | 0;
    result = result * 31 + Kotlin.hashCode(this.cpf) | 0;
    result = result * 31 + Kotlin.hashCode(this.idade) | 0;
    result = result * 31 + Kotlin.hashCode(this.genero) | 0;
    result = result * 31 + Kotlin.hashCode(this.vacinado) | 0;
    return result;
  };
  Paciente.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nome, other.nome) && Kotlin.equals(this.cpf, other.cpf) && Kotlin.equals(this.idade, other.idade) && Kotlin.equals(this.genero, other.genero) && Kotlin.equals(this.vacinado, other.vacinado)))));
  };
  var mutableList;
  var colsHeader;
  function cadastrar() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var nome = Kotlin.isType(tmp$ = document.getElementById('pnome'), HTMLInputElement) ? tmp$ : throwCCE();
    var cpf = Kotlin.isType(tmp$_0 = document.getElementById('pcpf'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var idade = Kotlin.isType(tmp$_1 = document.getElementById('pidade'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var genero = Kotlin.isType(tmp$_2 = document.getElementById('pgenero'), HTMLSelectElement) ? tmp$_2 : throwCCE();
    var vacinado = Kotlin.isType(tmp$_3 = document.getElementById('pvacinado'), HTMLInputElement) ? tmp$_3 : throwCCE();
    var paciente = new Paciente(nome.value, cpf.value, toInt(idade.value), genero.value, vacinado.checked);
    var minhaTabelaHeader = document.getElementById('Copo');
    mutableList.add_11rb$(paciente);
    minhaTabelaHeader != null ? (minhaTabelaHeader.insertAdjacentHTML('afterend', '<td>' + nome.value + ' <\/td> <td>' + cpf.value + ' <\/td> <td>' + idade.value + ' <\/td> <td>' + retornoGenero(genero.value) + ' <\/td> <td>' + retornoVacina(vacinado.checked) + ' <\/td>'), Unit) : null;
    limparCampos(nome, cpf, idade, genero, vacinado);
  }
  function retornoVacina(s) {
    var tmp$;
    if (s) {
      tmp$ = 'Sim';
    } else {
      tmp$ = 'N\xE3o';
    }
    return tmp$;
  }
  function retornoGenero(s) {
    switch (s) {
      case 'masc':
        return 'Masculino';
      case 'femi':
        return 'Feminino';
      case 'nbin':
        return 'N\xE3o-bin\xE1rio';
      default:return 'Outro';
    }
  }
  function limparCampos(nome, cpf, idade, genero, vacinado) {
    nome.value = '';
    cpf.value = '';
    idade.value = '';
    genero.value = 'masc';
    vacinado.checked = false;
  }
  function main$lambda(it) {
    cadastrar();
    return Unit;
  }
  function main() {
    var tmp$;
    var cadastrarBtn = Kotlin.isType(tmp$ = document.getElementById('cadastrar-btn'), HTMLButtonElement) ? tmp$ : throwCCE();
    cadastrarBtn.addEventListener('click', main$lambda);
  }
  _.Paciente = Paciente;
  Object.defineProperty(_, 'mutableList', {
    get: function () {
      return mutableList;
    }
  });
  Object.defineProperty(_, 'colsHeader', {
    get: function () {
      return colsHeader;
    }
  });
  _.cadastrar = cadastrar;
  _.retornoVacina_6taknv$ = retornoVacina;
  _.retornoGenero_61zpoe$ = retornoGenero;
  _.limparCampos_er0um8$ = limparCampos;
  _.main = main;
  mutableList = ArrayList_init();
  colsHeader = listOf(['nome', 'cpf', 'idade', 'genero', 'vacinado']);
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
