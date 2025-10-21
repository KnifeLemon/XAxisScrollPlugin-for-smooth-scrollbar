/**
 * X-Axis Scrolling Plugin for smooth-scrollbar
 * Enables horizontal scrolling with modifier key + mouse wheel
 * 
 * @author KnifeLemon
 * @version 1.0.0
 */

class XAxisScrollPlugin extends Scrollbar.ScrollbarPlugin {
    static pluginName = 'xAxisScroll';

    static defaultOptions = {
        /**
         * Modifier key for horizontal scrolling
         * Options: 'shiftKey', 'ctrlKey', 'altKey', 'metaKey'
         */
        modifierKey: 'shiftKey',
        
        /**
         * Wheel sensitivity multiplier for momentum
         */
        wheelSensitivity: 1.2
    };

    constructor(scrollbar, options) {
        super(scrollbar, options);
        
        this.wheelHandler = this.wheelHandler.bind(this);
    }

    /**
     * Plugin initialization
     */
    onInit() {
        this.addListeners();
    }

    /**
     * Plugin cleanup
     */
    onDestroy() {
        this.removeListeners();
    }

    /**
     * Add event listeners
     */
    addListeners() {
        const { containerEl } = this.scrollbar;
        
        // Capture phase to intercept before default scrolling
        containerEl.addEventListener('wheel', this.wheelHandler, { 
            passive: false, 
            capture: true 
        });
    }

    /**
     * Remove event listeners
     */
    removeListeners() {
        const { containerEl } = this.scrollbar;
        
        containerEl.removeEventListener('wheel', this.wheelHandler, { capture: true });
    }

    /**
     * Handle wheel events with smooth momentum
     */
    wheelHandler(event) {
        // Check if modifier key is pressed and it's a vertical wheel event
        if (event[this.options.modifierKey] && Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            // disable default scrolling - prevent vertical scroll
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            
            const { scrollbar } = this;
            
            // use smooth-scrollbar's momentum system
            const deltaX = event.deltaY * this.options.wheelSensitivity;
            
            // Implement smooth scrolling using addMomentum
            scrollbar.addMomentum(deltaX, 0);
            
            return false; // additional safety
        }
    }

}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = XAxisScrollPlugin;
}