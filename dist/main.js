"use strict";
const PARENT_ELEMENT_ID_NAME = 'properties-panel-scroll-container';
const SECTION_ELEMENT_CLASS_NAME = 'cachedSubtree';
const INSTANCE_PANEL_CLASS_NAME = 'instance_panel';
const DISPLAY_TEXTS = {
    FORM_LABEL_X: {
        JP: 'X',
        EN: 'X',
    },
    AUTO_LAYOUT_SECTION: {
        JP: 'オートレイアウト',
        EN: 'Auto layout',
    },
};
function handleKeyPress(event) {
    const parentElement = getParentElement();
    if (!parentElement) {
        throw new Error('Found Properties panel.');
    }
    switch (event.key) {
        case 'F4': // On Frame
            focusSection(getSectionByDisplayTexts(parentElement, DISPLAY_TEXTS.FORM_LABEL_X));
            event.preventDefault();
            break;
        case 'F8': // On Instance panel
            focusSection(getSectionByClassName(parentElement, INSTANCE_P ANEL_CLASS_NAME));
            event.preventDefault();
            break;
        case 'F12': // On Auto Layout
            focusSection(getSectionByDisplayTexts(parentElement, DISPLAY_TEXTS.AUTO_LAYOUT_SECTION));
            event.preventDefault();
            break;
        default:
            break;
    }
}
function getParentElement() {
    return document.getElementById(PARENT_ELEMENT_ID_NAME);
}
function getSectionByDisplayTexts(parentElement, targetDisplayText) {
    const searchTexts = Object.values(targetDisplayText);
    const labelEl = Array.from(parentElement.querySelectorAll('*')).find((el) => searchTexts.some((text) => el.textContent === text));
    if (!labelEl) {
        throw new Error('Label not found.');
    }
    const sectionElement = labelEl.closest(`.${SECTION_ELEMENT_CLASS_NAME}`);
    if (!sectionElement) {
        throw new Error('Section not found.');
    }
    return sectionElement;
}
function getSectionByClassName(parentElement, targetClassName) {
    const firstEl = parentElement.querySelector(`[class^="${targetClassName}"]`);
    if (!firstEl) {
        throw new Error('Class not found.');
    }
    const sectionElement = firstEl.closest(`.${SECTION_ELEMENT_CLASS_NAME}`);
    if (!sectionElement) {
        throw new Error('Section not found.');
    }
    return sectionElement;
}
function getFocusableElements(target) {
    return Array.from(target.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'));
}
function focusSection(targetSection) {
    const focusableElements = getFocusableElements(targetSection);
    for (const element of focusableElements) {
        if (!element.hasAttribute('disabled')) {
            element.focus();
            break;
        }
    }
}
window.addEventListener('keydown', handleKeyPress);
