/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ColorInfo } from "./utilities/colorInfo";
import { DnnToggleChangeEventDetail } from "./components/dnn-toggle/toggle-interface";
export namespace Components {
    interface DnnButton {
        /**
          * Optionally add a confirmation dialog before firing the action.
         */
        "confirm"?: boolean;
        /**
          * The text of the confirmation message;
         */
        "confirmMessage"?: string;
        /**
          * The text of the no button for confirmation.
         */
        "confirmNoText"?: string;
        /**
          * The text of the yes button for confirmation.
         */
        "confirmYesText"?: string;
        /**
          * Disables the button
         */
        "disabled": boolean;
        /**
          * Optionally reverses the button style.
         */
        "reversed": boolean;
        /**
          * Optionally sets the button size, small normal or large, defaults to normal
         */
        "size"?: 'small' | 'normal' | 'large';
        /**
          * Optional button style, can be either primary, secondary or tertiary and defaults to primary if not specified
         */
        "type": 'primary' | 'secondary' | 'tertiary';
    }
    interface DnnChevron {
        /**
          * Collapse text for screen readers
         */
        "collapseText"?: string;
        /**
          * Expand text for screen readers
         */
        "expandText"?: string;
        /**
          * Is the chevron expanded
         */
        "expanded"?: boolean;
    }
    interface DnnCollapsible {
        /**
          * Defines if the panel is expanded or not.
         */
        "expanded": boolean;
        /**
          * Defines the transition time in ms, defaults to 300ms
         */
        "transitionDuration"?: number;
        /**
          * Updates the component height, use to update after a slot content changes.
         */
        "updateSize": () => Promise<void>;
    }
    interface DnnColorPicker {
        /**
          * Sets the initial color, must be a valid 8 character hexadecimal string without the # sign.
         */
        "color": string;
        /**
          * Sets the width-height ratio of the color picker saturation-lightness box.
          * @example 100% renders a perfect square
         */
        "colorBoxHeight": string;
    }
    interface DnnModal {
        /**
          * Pass false to remove the backdrop click auto-dismiss feature.
         */
        "backdropDismiss": boolean;
        /**
          * Optionally pass the aria-label text for the close button. Defaults to "Close modal" if not provided.
         */
        "closeText"?: string;
        /**
          * Hides the modal
         */
        "hide": () => Promise<void>;
        /**
          * Shows the modal
         */
        "show": () => Promise<void>;
        /**
          * Optionally you can pass false to not show the close button. If you decide to do so, you should either not also prevent dismissal by clicking the backdrop or provide your own dismissal logic in the modal content.
         */
        "showCloseButton"?: boolean;
    }
    interface DnnSearchbox {
        /**
          * Debounces the queryChanged by 500ms.
         */
        "debounced": boolean;
        /**
          * Sets the field placeholder text.
         */
        "placeholder"?: string;
        /**
          * Sets the query
         */
        "query": string;
    }
    interface DnnSortIcon {
        /**
          * Defines the current sort direction
         */
        "sortDirection": "asc" | "desc" | "none";
    }
    interface DnnToggle {
        /**
          * If 'true' the toggle is checked (on).
         */
        "checked": boolean;
        /**
          * If 'true' the toggle is not be interacted with.
         */
        "disabled": boolean;
    }
}
declare global {
    interface HTMLDnnButtonElement extends Components.DnnButton, HTMLStencilElement {
    }
    var HTMLDnnButtonElement: {
        prototype: HTMLDnnButtonElement;
        new (): HTMLDnnButtonElement;
    };
    interface HTMLDnnChevronElement extends Components.DnnChevron, HTMLStencilElement {
    }
    var HTMLDnnChevronElement: {
        prototype: HTMLDnnChevronElement;
        new (): HTMLDnnChevronElement;
    };
    interface HTMLDnnCollapsibleElement extends Components.DnnCollapsible, HTMLStencilElement {
    }
    var HTMLDnnCollapsibleElement: {
        prototype: HTMLDnnCollapsibleElement;
        new (): HTMLDnnCollapsibleElement;
    };
    interface HTMLDnnColorPickerElement extends Components.DnnColorPicker, HTMLStencilElement {
    }
    var HTMLDnnColorPickerElement: {
        prototype: HTMLDnnColorPickerElement;
        new (): HTMLDnnColorPickerElement;
    };
    interface HTMLDnnModalElement extends Components.DnnModal, HTMLStencilElement {
    }
    var HTMLDnnModalElement: {
        prototype: HTMLDnnModalElement;
        new (): HTMLDnnModalElement;
    };
    interface HTMLDnnSearchboxElement extends Components.DnnSearchbox, HTMLStencilElement {
    }
    var HTMLDnnSearchboxElement: {
        prototype: HTMLDnnSearchboxElement;
        new (): HTMLDnnSearchboxElement;
    };
    interface HTMLDnnSortIconElement extends Components.DnnSortIcon, HTMLStencilElement {
    }
    var HTMLDnnSortIconElement: {
        prototype: HTMLDnnSortIconElement;
        new (): HTMLDnnSortIconElement;
    };
    interface HTMLDnnToggleElement extends Components.DnnToggle, HTMLStencilElement {
    }
    var HTMLDnnToggleElement: {
        prototype: HTMLDnnToggleElement;
        new (): HTMLDnnToggleElement;
    };
    interface HTMLElementTagNameMap {
        "dnn-button": HTMLDnnButtonElement;
        "dnn-chevron": HTMLDnnChevronElement;
        "dnn-collapsible": HTMLDnnCollapsibleElement;
        "dnn-color-picker": HTMLDnnColorPickerElement;
        "dnn-modal": HTMLDnnModalElement;
        "dnn-searchbox": HTMLDnnSearchboxElement;
        "dnn-sort-icon": HTMLDnnSortIconElement;
        "dnn-toggle": HTMLDnnToggleElement;
    }
}
declare namespace LocalJSX {
    interface DnnButton {
        /**
          * Optionally add a confirmation dialog before firing the action.
         */
        "confirm"?: boolean;
        /**
          * The text of the confirmation message;
         */
        "confirmMessage"?: string;
        /**
          * The text of the no button for confirmation.
         */
        "confirmNoText"?: string;
        /**
          * The text of the yes button for confirmation.
         */
        "confirmYesText"?: string;
        /**
          * Disables the button
         */
        "disabled"?: boolean;
        /**
          * Fires when confirm is true and the user cancels the action.
         */
        "onCanceled"?: (event: CustomEvent<any>) => void;
        /**
          * Fires when confirm is true and the user confirms the action.
         */
        "onConfirmed"?: (event: CustomEvent<any>) => void;
        /**
          * Optionally reverses the button style.
         */
        "reversed"?: boolean;
        /**
          * Optionally sets the button size, small normal or large, defaults to normal
         */
        "size"?: 'small' | 'normal' | 'large';
        /**
          * Optional button style, can be either primary, secondary or tertiary and defaults to primary if not specified
         */
        "type"?: 'primary' | 'secondary' | 'tertiary';
    }
    interface DnnChevron {
        /**
          * Collapse text for screen readers
         */
        "collapseText"?: string;
        /**
          * Expand text for screen readers
         */
        "expandText"?: string;
        /**
          * Is the chevron expanded
         */
        "expanded"?: boolean;
        /**
          * Fires up when the expanded status changes
         */
        "onChanged"?: (event: CustomEvent<any>) => void;
    }
    interface DnnCollapsible {
        /**
          * Defines if the panel is expanded or not.
         */
        "expanded"?: boolean;
        /**
          * Fires whenever the collapsible height has changed
         */
        "onDnnCollapsibleHeightChanged"?: (event: CustomEvent<void>) => void;
        /**
          * Defines the transition time in ms, defaults to 300ms
         */
        "transitionDuration"?: number;
    }
    interface DnnColorPicker {
        /**
          * Sets the initial color, must be a valid 8 character hexadecimal string without the # sign.
         */
        "color"?: string;
        /**
          * Sets the width-height ratio of the color picker saturation-lightness box.
          * @example 100% renders a perfect square
         */
        "colorBoxHeight"?: string;
        /**
          * Fires up when the color is changed and emits a ColorInfo object
          * @see ../../utilities/colorInfo.ts
         */
        "onColorChanged"?: (event: CustomEvent<ColorInfo>) => void;
    }
    interface DnnModal {
        /**
          * Pass false to remove the backdrop click auto-dismiss feature.
         */
        "backdropDismiss"?: boolean;
        /**
          * Optionally pass the aria-label text for the close button. Defaults to "Close modal" if not provided.
         */
        "closeText"?: string;
        /**
          * Fires when the modal is dismissed.
         */
        "onDismissed"?: (event: CustomEvent<any>) => void;
        /**
          * Optionally you can pass false to not show the close button. If you decide to do so, you should either not also prevent dismissal by clicking the backdrop or provide your own dismissal logic in the modal content.
         */
        "showCloseButton"?: boolean;
    }
    interface DnnSearchbox {
        /**
          * Debounces the queryChanged by 500ms.
         */
        "debounced"?: boolean;
        /**
          * Fires up each time the search query changes. The data passed is the new query.
         */
        "onQueryChanged"?: (event: CustomEvent<any>) => void;
        /**
          * Sets the field placeholder text.
         */
        "placeholder"?: string;
        /**
          * Sets the query
         */
        "query"?: string;
    }
    interface DnnSortIcon {
        /**
          * Emitted when the sort is changed.
         */
        "onSortChanged"?: (event: CustomEvent<"asc"|"desc"|"none">) => void;
        /**
          * Defines the current sort direction
         */
        "sortDirection"?: "asc" | "desc" | "none";
    }
    interface DnnToggle {
        /**
          * If 'true' the toggle is checked (on).
         */
        "checked"?: boolean;
        /**
          * If 'true' the toggle is not be interacted with.
         */
        "disabled"?: boolean;
        /**
          * Fires when the toggle changed
         */
        "onCheckChanged"?: (event: CustomEvent<DnnToggleChangeEventDetail>) => void;
    }
    interface IntrinsicElements {
        "dnn-button": DnnButton;
        "dnn-chevron": DnnChevron;
        "dnn-collapsible": DnnCollapsible;
        "dnn-color-picker": DnnColorPicker;
        "dnn-modal": DnnModal;
        "dnn-searchbox": DnnSearchbox;
        "dnn-sort-icon": DnnSortIcon;
        "dnn-toggle": DnnToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dnn-button": LocalJSX.DnnButton & JSXBase.HTMLAttributes<HTMLDnnButtonElement>;
            "dnn-chevron": LocalJSX.DnnChevron & JSXBase.HTMLAttributes<HTMLDnnChevronElement>;
            "dnn-collapsible": LocalJSX.DnnCollapsible & JSXBase.HTMLAttributes<HTMLDnnCollapsibleElement>;
            "dnn-color-picker": LocalJSX.DnnColorPicker & JSXBase.HTMLAttributes<HTMLDnnColorPickerElement>;
            "dnn-modal": LocalJSX.DnnModal & JSXBase.HTMLAttributes<HTMLDnnModalElement>;
            "dnn-searchbox": LocalJSX.DnnSearchbox & JSXBase.HTMLAttributes<HTMLDnnSearchboxElement>;
            "dnn-sort-icon": LocalJSX.DnnSortIcon & JSXBase.HTMLAttributes<HTMLDnnSortIconElement>;
            "dnn-toggle": LocalJSX.DnnToggle & JSXBase.HTMLAttributes<HTMLDnnToggleElement>;
        }
    }
}
