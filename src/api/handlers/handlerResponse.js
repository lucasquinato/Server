/**
 * @file handlerResponse.js
 * @fileoverview
 */

/**
 * @public
 * @exports
 * @function handlerResponse
 * 
 * @param {{ res: Response, changeStatus: number, defaultPage: string }} configs
 * @param {{ title: string }} options 
 * @returns { void }
 */
export function handlerResponse(configs, options) {
    if (!configs.res) throw new Error("O parâmetro Response é obrigatório no handler response.");
    const status = configs.changeStatus || 200;
    const { res } = configs;

    if (configs.defaultPage) {
        if (configs.defaultPage === "index") {
            return res
                .status(status)
                .render("index", {
                    title: "Game | Página Inícial - Entrar",
                    renderSection: {
                        enterAccount: true,
                        createAccount: false,
                    },
                    notifies: [
                        { type: "error", message: "Erro de teste pequeno" },
                        { type: "error", message: "Erro de teste grande para gerar uma notificação diferente" },
                        { type: "success", message: "Só uma mensagem de sucesso" },
                        { type: "warn", message: "Só um aviso aleatório" },
                    ],
                });
        }
    }
}