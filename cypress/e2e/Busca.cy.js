import busca from "../support/pages/tela_busca/busca";

describe("template spec", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("twttr.ready is not a function")) {
        console.log("Application Error Javascript Token");
        return false;
      } else if (err.message.includes("Cannot read properties of null")) {
        console.log("Application Error Javascript Token");
        return false;
      } else if (err.message.includes("Cannot read properties of undefined")) {
        console.log("Application Error Javascript Token");
        return false;
      }

      return true;
    });
  });

  it("Buscar produto especifico", () => {
    cy.viewport(1500, 900);
    busca.acessarTelaPrincipal();
    busca.pesquisa("Camisa Athletico Paranaense");
    cy.wait(5000);
  }),
    it("Buscar produtos de times especificos por botao", () => {
      cy.viewport(1500, 900);
      busca.acessarTelaPrincipal();
      cy.wait(8000);
      busca.logoDoTime();
      cy.wait(5000);
    }),
    it("Buscar produtos de times especificos por buscador", () => {
      cy.viewport(1500, 900);
      busca.acessarTelaPrincipal();
      cy.wait(8000);
      busca.pesquisa("Athletico Paranaense");
      cy.wait(5000);
    }),
    it("Especificar tipos de produtos em busca", () => {
      cy.viewport(1500, 900);
      busca.acessarTelaPrincipal();
      cy.wait(8000);
      busca.pesquisa("Athletico Paranaense");
      cy.wait(8000);
      busca.selecionarSubcategoria();
      cy.wait(5000);
    }),
    it("Buscar invalida", () => {
      cy.viewport(1500, 900);
      busca.acessarTelaPrincipal();
      cy.wait(8000);
      busca.pesquisa("ナルトのサクラ");
      cy.wait(5000);
    }),
    it("Buscar rodape", () => {
      cy.viewport(1500, 900);
      busca.acessarTelaPrincipal();
      cy.wait(8000);
      busca.scrowDown();
      cy.wait(4000);
      busca.clicarRodapeVelocita();
      cy.wait(4000);
    });
});
