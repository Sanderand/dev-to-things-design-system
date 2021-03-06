/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ThIcon {
    }
    interface ThTab {
        "active": boolean;
    }
    interface ThTabs {
        "setActiveTab": (activeTab: HTMLThTabElement) => Promise<void>;
    }
}
declare global {
    interface HTMLThIconElement extends Components.ThIcon, HTMLStencilElement {
    }
    var HTMLThIconElement: {
        prototype: HTMLThIconElement;
        new (): HTMLThIconElement;
    };
    interface HTMLThTabElement extends Components.ThTab, HTMLStencilElement {
    }
    var HTMLThTabElement: {
        prototype: HTMLThTabElement;
        new (): HTMLThTabElement;
    };
    interface HTMLThTabsElement extends Components.ThTabs, HTMLStencilElement {
    }
    var HTMLThTabsElement: {
        prototype: HTMLThTabsElement;
        new (): HTMLThTabsElement;
    };
    interface HTMLElementTagNameMap {
        "th-icon": HTMLThIconElement;
        "th-tab": HTMLThTabElement;
        "th-tabs": HTMLThTabsElement;
    }
}
declare namespace LocalJSX {
    interface ThIcon {
    }
    interface ThTab {
        "active"?: boolean;
    }
    interface ThTabs {
    }
    interface IntrinsicElements {
        "th-icon": ThIcon;
        "th-tab": ThTab;
        "th-tabs": ThTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "th-icon": LocalJSX.ThIcon & JSXBase.HTMLAttributes<HTMLThIconElement>;
            "th-tab": LocalJSX.ThTab & JSXBase.HTMLAttributes<HTMLThTabElement>;
            "th-tabs": LocalJSX.ThTabs & JSXBase.HTMLAttributes<HTMLThTabsElement>;
        }
    }
}
