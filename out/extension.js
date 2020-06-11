"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeCase = exports.activate = void 0;
const vscode = require("vscode");
const COMMAND = "case-change";
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider([
        { scheme: "file", language: "javascript" },
        { scheme: "file", language: "typescript" },
        { scheme: "file", language: "html" },
        { scheme: "file", language: "css" },
        { scheme: "file", language: "less" },
        { scheme: "file", language: "typescriptreact" },
        { scheme: "file", language: "scss" },
        { scheme: "file", language: "python" },
        { scheme: "file", language: "markdown" },
        { scheme: "file", language: "json" },
        { scheme: "file", language: "javascriptreact" },
        { scheme: "file", language: "sass" },
    ], new ChangeCase(), {
        providedCodeActionKinds: ChangeCase.providedCodeActionKinds,
    }));
}
exports.activate = activate;
class ChangeCase {
    provideCodeActions(document, range) {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        var selection = editor.selection;
        var text = editor.document.getText(selection);
        const changeToSnakeCase = this.createFix(document, range, "Snake Case", text);
        const changeToCamelCase = this.createFix(document, range, "Camel Case", text);
        const changeToCapitalCase = this.createFix(document, range, "Upper Case", text);
        const changeToLowerCase = this.createFix(document, range, "Flat Case", text);
        const changeToKebabCase = this.createFix(document, range, "Kebab Case", text);
        const changeToConstantCase = this.createFix(document, range, "Constant Case", text);
        const changeToPascalCase = this.createFix(document, range, "Pascal Case", text);
        changeToCamelCase.isPreferred = true;
        return [
            changeToSnakeCase,
            changeToCamelCase,
            changeToKebabCase,
            changeToCapitalCase,
            changeToLowerCase,
            changeToConstantCase,
            changeToPascalCase,
        ];
    }
    toConstantCase(text) {
        // @ts-ignore
        var constantCaseText = text
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map((x) => x.toUpperCase())
            .join("_");
        return constantCaseText;
    }
    toSnakeCase(text) {
        // @ts-ignore
        var snakeCaseText = text
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map((x) => x.toLowerCase())
            .join("_");
        return snakeCaseText;
    }
    toCamelCase(text) {
        var covertToKebab = this.toKebabCase(text);
        var camelCaseText = covertToKebab
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        return camelCaseText;
    }
    toKebabCase(text) {
        // @ts-ignore
        var kebabCaseText = text
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map((x) => x.toLowerCase())
            .join("-");
        return kebabCaseText;
    }
    toPascalCase(text) {
        var covertToKebab = this.toKebabCase(text);
        // @ts-ignore
        var pascalCaseText = covertToKebab
            .match(/[a-z]+/gi)
            .map(function (word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        })
            .join("");
        return pascalCaseText;
    }
    mapFunctionToArguments(emoji, text) {
        switch (emoji) {
            case "Pascal Case":
                return this.toPascalCase(text);
            case "Snake Case":
                return this.toSnakeCase(text);
            case "Camel Case":
                return this.toCamelCase(text);
            case "Kebab Case":
                return this.toKebabCase(text);
            case "Upper Case":
                return text.toUpperCase();
            case "Flat Case":
                return text.toLowerCase();
            case "Constant Case":
                return this.toConstantCase(text);
        }
    }
    createFix(document, range, emoji, text) {
        const fix = new vscode.CodeAction(`Change to ${emoji}`, vscode.CodeActionKind.QuickFix);
        fix.edit = new vscode.WorkspaceEdit();
        fix.edit.replace(document.uri, new vscode.Range(range.start, range.end), 
        // @ts-ignore
        this.mapFunctionToArguments(emoji, text));
        return fix;
    }
}
exports.ChangeCase = ChangeCase;
ChangeCase.providedCodeActionKinds = [
    vscode.CodeActionKind.QuickFix,
];
//# sourceMappingURL=extension.js.map