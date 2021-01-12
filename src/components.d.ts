/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Prompter } from "./components/prompt/prompt";
import { Server } from "stellar-sdk";
import { Balance, WalletAssetDetails } from "./components/wallet/wallet";
import { ILogger } from "./components/logview/logview";
export namespace Components {
    interface CollapsibleContainer {
        "hideText": string;
        "showText": string;
    }
    interface JsonViewer {
        "data": any;
    }
    interface LogView {
        "error": (title: string, body?: string) => Promise<void>;
        "instruction": (title: string, body?: string) => Promise<void>;
        "request": (url: string, body?: string | object) => Promise<void>;
        "response": (url: string, body?: string | object) => Promise<void>;
    }
    interface StellarLoader {
        "interval": any;
    }
    interface StellarPrompt {
        "prompter": Prompter;
    }
    interface StellarWallet {
        "UntrustedAssets": Map<string, Balance>;
        "assets": Map<string, WalletAssetDetails>;
        "logger": ILogger;
        "network_passphrase": string;
        "server": Server;
    }
}
declare global {
    interface HTMLCollapsibleContainerElement extends Components.CollapsibleContainer, HTMLStencilElement {
    }
    var HTMLCollapsibleContainerElement: {
        prototype: HTMLCollapsibleContainerElement;
        new (): HTMLCollapsibleContainerElement;
    };
    interface HTMLJsonViewerElement extends Components.JsonViewer, HTMLStencilElement {
    }
    var HTMLJsonViewerElement: {
        prototype: HTMLJsonViewerElement;
        new (): HTMLJsonViewerElement;
    };
    interface HTMLLogViewElement extends Components.LogView, HTMLStencilElement {
    }
    var HTMLLogViewElement: {
        prototype: HTMLLogViewElement;
        new (): HTMLLogViewElement;
    };
    interface HTMLStellarLoaderElement extends Components.StellarLoader, HTMLStencilElement {
    }
    var HTMLStellarLoaderElement: {
        prototype: HTMLStellarLoaderElement;
        new (): HTMLStellarLoaderElement;
    };
    interface HTMLStellarPromptElement extends Components.StellarPrompt, HTMLStencilElement {
    }
    var HTMLStellarPromptElement: {
        prototype: HTMLStellarPromptElement;
        new (): HTMLStellarPromptElement;
    };
    interface HTMLStellarWalletElement extends Components.StellarWallet, HTMLStencilElement {
    }
    var HTMLStellarWalletElement: {
        prototype: HTMLStellarWalletElement;
        new (): HTMLStellarWalletElement;
    };
    interface HTMLElementTagNameMap {
        "collapsible-container": HTMLCollapsibleContainerElement;
        "json-viewer": HTMLJsonViewerElement;
        "log-view": HTMLLogViewElement;
        "stellar-loader": HTMLStellarLoaderElement;
        "stellar-prompt": HTMLStellarPromptElement;
        "stellar-wallet": HTMLStellarWalletElement;
    }
}
declare namespace LocalJSX {
    interface CollapsibleContainer {
        "hideText"?: string;
        "showText"?: string;
    }
    interface JsonViewer {
        "data"?: any;
    }
    interface LogView {
    }
    interface StellarLoader {
        "interval"?: any;
    }
    interface StellarPrompt {
        "prompter"?: Prompter;
    }
    interface StellarWallet {
        "UntrustedAssets"?: Map<string, Balance>;
        "assets"?: Map<string, WalletAssetDetails>;
        "logger"?: ILogger;
        "network_passphrase"?: string;
        "server"?: Server;
    }
    interface IntrinsicElements {
        "collapsible-container": CollapsibleContainer;
        "json-viewer": JsonViewer;
        "log-view": LogView;
        "stellar-loader": StellarLoader;
        "stellar-prompt": StellarPrompt;
        "stellar-wallet": StellarWallet;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "collapsible-container": LocalJSX.CollapsibleContainer & JSXBase.HTMLAttributes<HTMLCollapsibleContainerElement>;
            "json-viewer": LocalJSX.JsonViewer & JSXBase.HTMLAttributes<HTMLJsonViewerElement>;
            "log-view": LocalJSX.LogView & JSXBase.HTMLAttributes<HTMLLogViewElement>;
            "stellar-loader": LocalJSX.StellarLoader & JSXBase.HTMLAttributes<HTMLStellarLoaderElement>;
            "stellar-prompt": LocalJSX.StellarPrompt & JSXBase.HTMLAttributes<HTMLStellarPromptElement>;
            "stellar-wallet": LocalJSX.StellarWallet & JSXBase.HTMLAttributes<HTMLStellarWalletElement>;
        }
    }
}
