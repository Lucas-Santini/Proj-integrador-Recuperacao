import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-PAO47BMR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-SISTMAML.js";
import "./chunk-SAVXX6OM.js";
import "./chunk-SG3BCSKH.js";
import {
  Observable,
  Subject,
  debounceTime
} from "./chunk-PQ7O3X3G.js";
import "./chunk-J4B6MK7R.js";

// node_modules/angular-split/fesm2022/angular-split.mjs
var _c0 = ["gutterEls"];
var _c1 = ["*"];
var _c2 = (a0, a1, a2, a3, a4, a5) => ({
  areaBefore: a0,
  areaAfter: a1,
  gutterNum: a2,
  first: a3,
  last: a4,
  isDragged: a5
});
function SplitComponent_ng_template_1_div_0_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SplitComponent_ng_template_1_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SplitComponent_ng_template_1_div_0_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const injector_r4 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext(3);
    const area_r6 = ctx_r4.$implicit;
    const index_r2 = ctx_r4.index;
    const first_r7 = ctx_r4.first;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.customGutter.template)("ngTemplateOutletContext", ɵɵpureFunction6(3, _c2, area_r6, ctx_r2.displayedAreas[index_r2 + 1], index_r2 + 1, first_r7, index_r2 === ctx_r2.displayedAreas.length - 2, ctx_r2.draggedGutterNum === index_r2 + 1))("ngTemplateOutletInjector", injector_r4);
  }
}
function SplitComponent_ng_template_1_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SplitComponent_ng_template_1_div_0_ng_container_2_ng_container_1_Template, 2, 10, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r2 = ɵɵnextContext(2).index;
    ɵɵadvance();
    ɵɵproperty("asSplitGutterDynamicInjector", index_r2 + 1);
  }
}
function SplitComponent_ng_template_1_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
}
function SplitComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4, 0);
    ɵɵlistener("keydown", function SplitComponent_ng_template_1_div_0_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const index_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.startKeyboardDrag($event, index_r2 * 2 + 1, index_r2 + 1));
    })("mousedown", function SplitComponent_ng_template_1_div_0_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const index_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.startMouseDrag($event, index_r2 * 2 + 1, index_r2 + 1));
    })("touchstart", function SplitComponent_ng_template_1_div_0_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r1);
      const index_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.startMouseDrag($event, index_r2 * 2 + 1, index_r2 + 1));
    })("mouseup", function SplitComponent_ng_template_1_div_0_Template_div_mouseup_0_listener($event) {
      ɵɵrestoreView(_r1);
      const index_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clickGutter($event, index_r2 + 1));
    })("touchend", function SplitComponent_ng_template_1_div_0_Template_div_touchend_0_listener($event) {
      ɵɵrestoreView(_r1);
      const index_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clickGutter($event, index_r2 + 1));
    });
    ɵɵtemplate(2, SplitComponent_ng_template_1_div_0_ng_container_2_Template, 2, 1, "ng-container", 5)(3, SplitComponent_ng_template_1_div_0_ng_template_3_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultGutterTpl_r8 = ɵɵreference(4);
    const ctx_r4 = ɵɵnextContext();
    const area_r6 = ctx_r4.$implicit;
    const index_r2 = ctx_r4.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("flex-basis", ctx_r2.gutterSize, "px")("order", index_r2 * 2 + 1);
    ɵɵclassProp("as-dragged", ctx_r2.draggedGutterNum === index_r2 + 1);
    ɵɵattribute("aria-label", ctx_r2.gutterAriaLabel)("aria-orientation", ctx_r2.direction)("aria-valuemin", area_r6.minSize)("aria-valuemax", area_r6.maxSize)("aria-valuenow", area_r6.size === "*" ? null : area_r6.size)("aria-valuetext", ctx_r2.getAriaAreaSizeText(area_r6.size));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.customGutter == null ? null : ctx_r2.customGutter.template)("ngIfElse", defaultGutterTpl_r8);
  }
}
function SplitComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SplitComponent_ng_template_1_div_0_Template, 5, 14, "div", 3);
  }
  if (rf & 2) {
    const last_r9 = ctx.last;
    ɵɵproperty("ngIf", last_r9 === false);
  }
}
function getPointFromEvent(event) {
  if (event.changedTouches !== void 0 && event.changedTouches.length > 0) {
    return {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY
    };
  } else if (event.clientX !== void 0 && event.clientY !== void 0) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  } else if (event.currentTarget !== void 0) {
    const gutterEl = event.currentTarget;
    return {
      x: gutterEl.offsetLeft,
      y: gutterEl.offsetTop
    };
  }
  return null;
}
function pointDeltaEquals(lhs, rhs, deltaPx) {
  return Math.abs(lhs.x - rhs.x) <= deltaPx && Math.abs(lhs.y - rhs.y) <= deltaPx;
}
function getKeyboardEndpoint(event, direction) {
  if (direction === "horizontal") {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
      case "PageUp":
      case "PageDown":
        break;
      default:
        return null;
    }
  }
  if (direction === "vertical") {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case "PageUp":
      case "PageDown":
        break;
      default:
        return null;
    }
  }
  const gutterEl = event.currentTarget;
  const offset = event.key === "PageUp" || event.key === "PageDown" ? 50 * 10 : 50;
  let offsetX = gutterEl.offsetLeft, offsetY = gutterEl.offsetTop;
  switch (event.key) {
    case "ArrowLeft":
      offsetX -= offset;
      break;
    case "ArrowRight":
      offsetX += offset;
      break;
    case "ArrowUp":
      offsetY -= offset;
      break;
    case "ArrowDown":
      offsetY += offset;
      break;
    case "PageUp":
      if (direction === "vertical") {
        offsetY -= offset;
      } else {
        offsetX += offset;
      }
      break;
    case "PageDown":
      if (direction === "vertical") {
        offsetY += offset;
      } else {
        offsetX -= offset;
      }
      break;
    default:
      return null;
  }
  return {
    x: offsetX,
    y: offsetY
  };
}
function getElementPixelSize(elRef, direction) {
  const rect = elRef.nativeElement.getBoundingClientRect();
  return direction === "horizontal" ? rect.width : rect.height;
}
function getInputBoolean(v) {
  return typeof v === "boolean" ? v : v !== "false";
}
function getInputPositiveNumber(v, defaultValue) {
  if (v === null || v === void 0)
    return defaultValue;
  v = Number(v);
  return !isNaN(v) && v >= 0 ? v : defaultValue;
}
function isUserSizesValid(unit, sizes) {
  if (unit === "percent") {
    const total = sizes.reduce((total2, s) => s !== "*" ? total2 + s : total2, 0);
    const wildcardSizeAreas = sizes.filter((size) => size === "*");
    if (wildcardSizeAreas.length > 1) {
      return false;
    }
    if (wildcardSizeAreas.length === 1) {
      return total < 100.1;
    }
    return total > 99.9 && total < 100.1;
  }
  if (unit === "pixel") {
    return sizes.filter((s) => s === "*").length === 1;
  }
}
function getAreaMinSize(a) {
  if (a.size === "*") {
    return null;
  }
  if (a.component.lockSize === true) {
    return a.size;
  }
  if (a.component.minSize === null) {
    return null;
  }
  return a.component.minSize;
}
function getAreaMaxSize(a) {
  if (a.size === "*") {
    return null;
  }
  if (a.component.lockSize === true) {
    return a.size;
  }
  if (a.component.maxSize === null) {
    return null;
  }
  if (a.component.maxSize < a.size) {
    return a.size;
  }
  return a.component.maxSize;
}
function getGutterSideAbsorptionCapacity(unit, sideAreas, pixels, allAreasSizePixel) {
  return sideAreas.reduce((acc, area) => {
    const res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
    acc.list.push(res);
    acc.remain = res.pixelRemain;
    return acc;
  }, {
    remain: pixels,
    list: []
  });
}
function getAreaAbsorptionCapacity(unit, areaSnapshot, pixels, allAreasSizePixel) {
  if (pixels === 0) {
    return {
      areaSnapshot,
      pixelAbsorb: 0,
      percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
      pixelRemain: 0
    };
  }
  if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
    return {
      areaSnapshot,
      pixelAbsorb: 0,
      percentAfterAbsorption: 0,
      pixelRemain: pixels
    };
  }
  if (unit === "percent") {
    return getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel);
  }
  if (unit === "pixel") {
    return getAreaAbsorptionCapacityPixel(areaSnapshot, pixels);
  }
}
function getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel) {
  const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
  const tempPercentSize = tempPixelSize / allAreasSizePixel * 100;
  if (pixels > 0) {
    if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
      const maxSizePixel = areaSnapshot.area.maxSize / 100 * allAreasSizePixel;
      return {
        areaSnapshot,
        pixelAbsorb: maxSizePixel,
        percentAfterAbsorption: areaSnapshot.area.maxSize,
        pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
      pixelRemain: 0
    };
  } else if (pixels < 0) {
    if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
      const minSizePixel = areaSnapshot.area.minSize / 100 * allAreasSizePixel;
      return {
        areaSnapshot,
        pixelAbsorb: minSizePixel,
        percentAfterAbsorption: areaSnapshot.area.minSize,
        pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel
      };
    } else if (tempPercentSize < 0) {
      return {
        areaSnapshot,
        pixelAbsorb: -areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: 0,
        pixelRemain: pixels + areaSnapshot.sizePixelAtStart
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: tempPercentSize,
      pixelRemain: 0
    };
  }
}
function getAreaAbsorptionCapacityPixel(areaSnapshot, pixels) {
  const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
  if (pixels > 0) {
    if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
      return {
        areaSnapshot,
        pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: -1,
        pixelRemain: tempPixelSize - areaSnapshot.area.maxSize
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: -1,
      pixelRemain: 0
    };
  } else if (pixels < 0) {
    if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
      return {
        areaSnapshot,
        pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
        percentAfterAbsorption: -1,
        pixelRemain: tempPixelSize - areaSnapshot.area.minSize
      };
    } else if (tempPixelSize < 0) {
      return {
        areaSnapshot,
        pixelAbsorb: -areaSnapshot.sizePixelAtStart,
        percentAfterAbsorption: -1,
        pixelRemain: pixels + areaSnapshot.sizePixelAtStart
      };
    }
    return {
      areaSnapshot,
      pixelAbsorb: pixels,
      percentAfterAbsorption: -1,
      pixelRemain: 0
    };
  }
}
function updateAreaSize(unit, item) {
  if (item.areaSnapshot.area.size !== "*") {
    if (unit === "percent") {
      item.areaSnapshot.area.size = item.percentAfterAbsorption;
    } else if (unit === "pixel") {
      item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
    }
  }
}
var ANGULAR_SPLIT_DEFAULT_OPTIONS = new InjectionToken("angular-split-global-config");
var _SplitGutterDirective = class _SplitGutterDirective {
  constructor(template) {
    this.template = template;
    this.gutterToHandleElementMap = /* @__PURE__ */ new Map();
    this.gutterToExcludeDragElementMap = /* @__PURE__ */ new Map();
  }
  canStartDragging(originElement, gutterNum) {
    if (this.gutterToExcludeDragElementMap.has(gutterNum)) {
      const isInsideExclude = this.gutterToExcludeDragElementMap.get(gutterNum).some((gutterExcludeElement) => gutterExcludeElement.nativeElement.contains(originElement));
      if (isInsideExclude) {
        return false;
      }
    }
    if (this.gutterToHandleElementMap.has(gutterNum)) {
      return this.gutterToHandleElementMap.get(gutterNum).some((gutterHandleElement) => gutterHandleElement.nativeElement.contains(originElement));
    }
    return true;
  }
  addToMap(map, gutterNum, elementRef) {
    if (map.has(gutterNum)) {
      map.get(gutterNum).push(elementRef);
    } else {
      map.set(gutterNum, [elementRef]);
    }
  }
  removedFromMap(map, gutterNum, elementRef) {
    const elements = map.get(gutterNum);
    elements.splice(elements.indexOf(elementRef), 1);
    if (elements.length === 0) {
      map.delete(gutterNum);
    }
  }
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
};
_SplitGutterDirective.ɵfac = function SplitGutterDirective_Factory(t) {
  return new (t || _SplitGutterDirective)(ɵɵdirectiveInject(TemplateRef));
};
_SplitGutterDirective.ɵdir = ɵɵdefineDirective({
  type: _SplitGutterDirective,
  selectors: [["", "asSplitGutter", ""]]
});
var SplitGutterDirective = _SplitGutterDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitGutterDirective, [{
    type: Directive,
    args: [{
      selector: "[asSplitGutter]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var GUTTER_NUM_TOKEN = new InjectionToken("Gutter num");
var _SplitGutterDynamicInjectorDirective = class _SplitGutterDynamicInjectorDirective {
  set gutterNum(value) {
    this.vcr.clear();
    const injector = Injector.create({
      providers: [{
        provide: GUTTER_NUM_TOKEN,
        useValue: value
      }],
      parent: this.vcr.injector
    });
    this.vcr.createEmbeddedView(this.templateRef, {
      $implicit: injector
    });
  }
  constructor(vcr, templateRef) {
    this.vcr = vcr;
    this.templateRef = templateRef;
  }
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
};
_SplitGutterDynamicInjectorDirective.ɵfac = function SplitGutterDynamicInjectorDirective_Factory(t) {
  return new (t || _SplitGutterDynamicInjectorDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
_SplitGutterDynamicInjectorDirective.ɵdir = ɵɵdefineDirective({
  type: _SplitGutterDynamicInjectorDirective,
  selectors: [["", "asSplitGutterDynamicInjector", ""]],
  inputs: {
    gutterNum: [InputFlags.None, "asSplitGutterDynamicInjector", "gutterNum"]
  }
});
var SplitGutterDynamicInjectorDirective = _SplitGutterDynamicInjectorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitGutterDynamicInjectorDirective, [{
    type: Directive,
    args: [{
      selector: "[asSplitGutterDynamicInjector]"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }], {
    gutterNum: [{
      type: Input,
      args: ["asSplitGutterDynamicInjector"]
    }]
  });
})();
var _SplitComponent = class _SplitComponent {
  set direction(v) {
    this._direction = v === "vertical" ? "vertical" : "horizontal";
    this.renderer.addClass(this.elRef.nativeElement, `as-${this._direction}`);
    this.renderer.removeClass(this.elRef.nativeElement, `as-${this._direction === "vertical" ? "horizontal" : "vertical"}`);
    this.build(false, false);
  }
  get direction() {
    return this._direction;
  }
  set unit(v) {
    this._unit = v === "pixel" ? "pixel" : "percent";
    this.renderer.addClass(this.elRef.nativeElement, `as-${this._unit}`);
    this.renderer.removeClass(this.elRef.nativeElement, `as-${this._unit === "pixel" ? "percent" : "pixel"}`);
    this.build(false, true);
  }
  get unit() {
    return this._unit;
  }
  set gutterSize(v) {
    this._gutterSize = getInputPositiveNumber(v, 11);
    this.build(false, false);
  }
  get gutterSize() {
    return this._gutterSize;
  }
  set gutterStep(v) {
    this._gutterStep = getInputPositiveNumber(v, 1);
  }
  get gutterStep() {
    return this._gutterStep;
  }
  set restrictMove(v) {
    this._restrictMove = getInputBoolean(v);
  }
  get restrictMove() {
    return this._restrictMove;
  }
  set useTransition(v) {
    this._useTransition = getInputBoolean(v);
    if (this._useTransition) {
      this.renderer.addClass(this.elRef.nativeElement, "as-transition");
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "as-transition");
    }
  }
  get useTransition() {
    return this._useTransition;
  }
  set disabled(v) {
    this._disabled = getInputBoolean(v);
    if (this._disabled) {
      this.renderer.addClass(this.elRef.nativeElement, "as-disabled");
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "as-disabled");
    }
  }
  get disabled() {
    return this._disabled;
  }
  set dir(v) {
    this._dir = v === "rtl" ? "rtl" : "ltr";
    this.renderer.setAttribute(this.elRef.nativeElement, "dir", this._dir);
  }
  get dir() {
    return this._dir;
  }
  set gutterDblClickDuration(v) {
    this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
  }
  get gutterDblClickDuration() {
    return this._gutterDblClickDuration;
  }
  get transitionEnd() {
    return new Observable((subscriber) => this.transitionEndSubscriber = subscriber).pipe(debounceTime(20));
  }
  constructor(ngZone, elRef, cdRef, renderer, globalConfig) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.renderer = renderer;
    this.gutterClickDeltaPx = 2;
    this._config = {
      direction: "horizontal",
      unit: "percent",
      gutterSize: 11,
      gutterStep: 1,
      restrictMove: false,
      useTransition: false,
      disabled: false,
      dir: "ltr",
      gutterDblClickDuration: 0
    };
    this.dragStart = new EventEmitter(false);
    this.dragEnd = new EventEmitter(false);
    this.gutterClick = new EventEmitter(false);
    this.gutterDblClick = new EventEmitter(false);
    this.dragProgressSubject = new Subject();
    this.dragProgress$ = this.dragProgressSubject.asObservable();
    this.isDragging = false;
    this.isWaitingClear = false;
    this.isWaitingInitialMove = false;
    this.dragListeners = [];
    this.snapshot = null;
    this.startPoint = null;
    this.endPoint = null;
    this.displayedAreas = [];
    this.hiddenAreas = [];
    this._clickTimeout = null;
    this.draggedGutterNum = void 0;
    this.direction = this._direction;
    this._config = globalConfig ? Object.assign(this._config, globalConfig) : this._config;
    Object.keys(this._config).forEach((property) => {
      this[property] = this._config[property];
    });
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.renderer.addClass(this.elRef.nativeElement, "as-init"));
    });
  }
  getNbGutters() {
    return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
  }
  addArea(component) {
    const newArea = {
      component,
      order: 0,
      size: 0,
      minSize: null,
      maxSize: null,
      sizeBeforeCollapse: null,
      gutterBeforeCollapse: 0
    };
    if (component.visible === true) {
      this.displayedAreas.push(newArea);
      this.build(true, true);
    } else {
      this.hiddenAreas.push(newArea);
    }
  }
  removeArea(component) {
    if (this.displayedAreas.some((a) => a.component === component)) {
      const area = this.displayedAreas.find((a) => a.component === component);
      this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
      this.build(true, true);
    } else if (this.hiddenAreas.some((a) => a.component === component)) {
      const area = this.hiddenAreas.find((a) => a.component === component);
      this.hiddenAreas.splice(this.hiddenAreas.indexOf(area), 1);
    }
  }
  updateArea(component, resetOrders, resetSizes) {
    if (component.visible === true) {
      this.build(resetOrders, resetSizes);
    }
  }
  showArea(component) {
    const area = this.hiddenAreas.find((a) => a.component === component);
    if (area === void 0) {
      return;
    }
    const areas = this.hiddenAreas.splice(this.hiddenAreas.indexOf(area), 1);
    this.displayedAreas.push(...areas);
    this.build(true, true);
  }
  hideArea(comp) {
    const area = this.displayedAreas.find((a) => a.component === comp);
    if (area === void 0) {
      return;
    }
    const areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
    areas.forEach((item) => {
      item.order = 0;
      item.size = 0;
    });
    this.hiddenAreas.push(...areas);
    this.build(true, true);
  }
  getVisibleAreaSizes() {
    return this.displayedAreas.map((a) => a.size);
  }
  setVisibleAreaSizes(sizes) {
    if (sizes.length !== this.displayedAreas.length) {
      return false;
    }
    const formattedSizes = sizes.map((s) => getInputPositiveNumber(s, "*"));
    const isValid = isUserSizesValid(this.unit, formattedSizes);
    if (isValid === false) {
      return false;
    }
    this.displayedAreas.forEach((area, i) => area.component.size = formattedSizes[i]);
    this.build(false, true);
    return true;
  }
  build(resetOrders, resetSizes) {
    this.stopDragging();
    if (resetOrders === true) {
      if (this.displayedAreas.every((a) => a.component.order !== null)) {
        this.displayedAreas.sort((a, b) => a.component.order - b.component.order);
      }
      this.displayedAreas.forEach((area, i) => {
        area.order = i * 2;
        area.component.setStyleOrder(area.order);
      });
    }
    if (resetSizes === true) {
      const useUserSizes = isUserSizesValid(this.unit, this.displayedAreas.map((a) => a.component.size));
      switch (this.unit) {
        case "percent": {
          const defaultSize = 100 / this.displayedAreas.length;
          this.displayedAreas.forEach((area) => {
            area.size = useUserSizes ? area.component.size : defaultSize;
            area.minSize = getAreaMinSize(area);
            area.maxSize = getAreaMaxSize(area);
          });
          break;
        }
        case "pixel": {
          if (useUserSizes) {
            this.displayedAreas.forEach((area) => {
              area.size = area.component.size;
              area.minSize = getAreaMinSize(area);
              area.maxSize = getAreaMaxSize(area);
            });
          } else {
            const wildcardSizeAreas = this.displayedAreas.filter((a) => a.component.size === "*");
            if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
              this.displayedAreas.forEach((area, i) => {
                area.size = i === 0 ? "*" : area.component.size;
                area.minSize = i === 0 ? area.component.minSize : getAreaMinSize(area);
                area.maxSize = i === 0 ? null : getAreaMaxSize(area);
              });
            } else if (wildcardSizeAreas.length > 1) {
              let alreadyGotOne = false;
              this.displayedAreas.forEach((area) => {
                if (area.component.size === "*") {
                  if (alreadyGotOne === false) {
                    area.size = "*";
                    area.minSize = null;
                    area.maxSize = null;
                    alreadyGotOne = true;
                  } else {
                    area.size = 100;
                    area.minSize = null;
                    area.maxSize = null;
                  }
                } else {
                  area.size = area.component.size;
                  area.minSize = getAreaMinSize(area);
                  area.maxSize = getAreaMaxSize(area);
                }
              });
            }
          }
          break;
        }
      }
    }
    this.refreshStyleSizes();
    this.cdRef.markForCheck();
  }
  refreshStyleSizes() {
    if (this.unit === "percent") {
      if (this.displayedAreas.length === 1) {
        this.displayedAreas[0].component.setStyleFlex(0, 0, `100%`, false, false);
      } else {
        const sumGutterSize = this.getNbGutters() * this.gutterSize;
        this.displayedAreas.forEach((area) => {
          if (area.size === "*") {
            if (this.displayedAreas.length === 1) {
              area.component.setStyleFlex(1, 1, `100%`, false, false);
            } else {
              area.component.setStyleFlex(1, 1, `auto`, false, false);
            }
          } else {
            area.component.setStyleFlex(0, 0, `calc( ${area.size}% - ${area.size / 100 * sumGutterSize}px )`, area.minSize !== null && area.minSize === area.size, area.maxSize !== null && area.maxSize === area.size);
          }
        });
      }
    } else if (this.unit === "pixel") {
      this.displayedAreas.forEach((area) => {
        if (area.size === "*") {
          if (this.displayedAreas.length === 1) {
            area.component.setStyleFlex(1, 1, `100%`, false, false);
          } else {
            area.component.setStyleFlex(1, 1, `auto`, false, false);
          }
        } else {
          if (this.displayedAreas.length === 1) {
            area.component.setStyleFlex(0, 0, `100%`, false, false);
          } else {
            area.component.setStyleFlex(0, 0, `${area.size}px`, area.minSize !== null && area.minSize === area.size, area.maxSize !== null && area.maxSize === area.size);
          }
        }
      });
    }
  }
  clickGutter(event, gutterNum) {
    const tempPoint = getPointFromEvent(event);
    if (this.startPoint && pointDeltaEquals(this.startPoint, tempPoint, this.gutterClickDeltaPx) && (!this.isDragging || this.isWaitingInitialMove)) {
      if (this._clickTimeout !== null) {
        window.clearTimeout(this._clickTimeout);
        this._clickTimeout = null;
        this.notify("dblclick", gutterNum);
        this.stopDragging();
      } else {
        this._clickTimeout = window.setTimeout(() => {
          this._clickTimeout = null;
          this.notify("click", gutterNum);
          this.stopDragging();
        }, this.gutterDblClickDuration);
      }
    }
  }
  startKeyboardDrag(event, gutterOrder, gutterNum) {
    if (this.disabled === true || this.isWaitingClear === true) {
      return;
    }
    const endPoint = getKeyboardEndpoint(event, this.direction);
    if (endPoint === null) {
      return;
    }
    this.endPoint = endPoint;
    this.startPoint = getPointFromEvent(event);
    event.preventDefault();
    event.stopPropagation();
    this.setupForDragEvent(gutterOrder, gutterNum);
    this.startDragging();
    this.drag();
    this.stopDragging();
  }
  startMouseDrag(event, gutterOrder, gutterNum) {
    if (this.customGutter && !this.customGutter.canStartDragging(event.target, gutterNum)) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.startPoint = getPointFromEvent(event);
    if (this.startPoint === null || this.disabled === true || this.isWaitingClear === true) {
      return;
    }
    this.setupForDragEvent(gutterOrder, gutterNum);
    this.dragListeners.push(this.renderer.listen("document", "mouseup", this.stopDragging.bind(this)));
    this.dragListeners.push(this.renderer.listen("document", "touchend", this.stopDragging.bind(this)));
    this.dragListeners.push(this.renderer.listen("document", "touchcancel", this.stopDragging.bind(this)));
    this.ngZone.runOutsideAngular(() => {
      this.dragListeners.push(this.renderer.listen("document", "mousemove", this.mouseDragEvent.bind(this)));
      this.dragListeners.push(this.renderer.listen("document", "touchmove", this.mouseDragEvent.bind(this)));
    });
    this.startDragging();
  }
  setupForDragEvent(gutterOrder, gutterNum) {
    this.snapshot = {
      gutterNum,
      lastSteppedOffset: 0,
      allAreasSizePixel: getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
      allInvolvedAreasSizePercent: 100,
      areasBeforeGutter: [],
      areasAfterGutter: []
    };
    this.displayedAreas.forEach((area) => {
      const areaSnapshot = {
        area,
        sizePixelAtStart: getElementPixelSize(area.component.elRef, this.direction),
        sizePercentAtStart: this.unit === "percent" ? area.size : -1
        // If pixel mode, anyway, will not be used.
      };
      if (area.order < gutterOrder) {
        if (this.restrictMove === true) {
          this.snapshot.areasBeforeGutter = [areaSnapshot];
        } else {
          this.snapshot.areasBeforeGutter.unshift(areaSnapshot);
        }
      } else if (area.order > gutterOrder) {
        if (this.restrictMove === true) {
          if (this.snapshot.areasAfterGutter.length === 0) {
            this.snapshot.areasAfterGutter = [areaSnapshot];
          }
        } else {
          this.snapshot.areasAfterGutter.push(areaSnapshot);
        }
      }
    });
    if (this.restrictMove && this.unit === "percent") {
      const areaSnapshotBefore = this.snapshot.areasBeforeGutter[0];
      const areaSnapshotAfter = this.snapshot.areasAfterGutter[0];
      if (areaSnapshotBefore.area.size === "*" || areaSnapshotAfter.area.size === "*") {
        const notInvolvedAreasSizesPercent = this.displayedAreas.reduce((accum, area) => {
          if (areaSnapshotBefore.area !== area && areaSnapshotAfter.area !== area) {
            return accum + area.size;
          }
          return accum;
        }, 0);
        this.snapshot.allInvolvedAreasSizePercent = 100 - notInvolvedAreasSizesPercent;
      } else {
        this.snapshot.allInvolvedAreasSizePercent = [...this.snapshot.areasBeforeGutter, ...this.snapshot.areasAfterGutter].reduce((t, a) => t + a.sizePercentAtStart, 0);
      }
    }
    if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
      return;
    }
  }
  startDragging() {
    this.displayedAreas.forEach((area) => area.component.lockEvents());
    this.isDragging = true;
    this.isWaitingInitialMove = true;
  }
  mouseDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    const tempPoint = getPointFromEvent(event);
    if (this._clickTimeout !== null && !pointDeltaEquals(this.startPoint, tempPoint, this.gutterClickDeltaPx)) {
      window.clearTimeout(this._clickTimeout);
      this._clickTimeout = null;
    }
    if (this.isDragging === false) {
      return;
    }
    this.endPoint = getPointFromEvent(event);
    if (this.endPoint === null) {
      return;
    }
    this.drag();
  }
  drag() {
    if (this.isWaitingInitialMove) {
      if (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y) {
        this.ngZone.run(() => {
          this.isWaitingInitialMove = false;
          this.renderer.addClass(this.elRef.nativeElement, "as-dragging");
          this.draggedGutterNum = this.snapshot.gutterNum;
          this.cdRef.markForCheck();
          this.notify("start", this.snapshot.gutterNum);
        });
      } else {
        return;
      }
    }
    let offset = this.direction === "horizontal" ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;
    if (this.dir === "rtl" && this.direction === "horizontal") {
      offset = -offset;
    }
    const steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;
    if (steppedOffset === this.snapshot.lastSteppedOffset) {
      return;
    }
    this.snapshot.lastSteppedOffset = steppedOffset;
    let areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
    let areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel);
    if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
      if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) {
      } else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
        areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
      } else {
        areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
      }
    } else if (areasBefore.remain !== 0) {
      areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
    } else if (areasAfter.remain !== 0) {
      areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
    }
    if (this.unit === "percent") {
      const all = [...areasBefore.list, ...areasAfter.list];
      const wildcardArea = all.find((a) => a.percentAfterAbsorption === "*");
      const areaToReset = wildcardArea ?? all.find((a) => a.percentAfterAbsorption !== 0 && a.percentAfterAbsorption !== a.areaSnapshot.area.minSize && a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize);
      if (areaToReset) {
        areaToReset.percentAfterAbsorption = this.snapshot.allInvolvedAreasSizePercent - all.filter((a) => a !== areaToReset).reduce((total, a) => total + a.percentAfterAbsorption, 0);
      }
    }
    areasBefore.list.forEach((item) => updateAreaSize(this.unit, item));
    areasAfter.list.forEach((item) => updateAreaSize(this.unit, item));
    this.refreshStyleSizes();
    this.notify("progress", this.snapshot.gutterNum);
  }
  stopDragging(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.isDragging === false) {
      return;
    }
    this.displayedAreas.forEach((area) => area.component.unlockEvents());
    while (this.dragListeners.length > 0) {
      const fct = this.dragListeners.pop();
      if (fct) {
        fct();
      }
    }
    this.isDragging = false;
    if (this.isWaitingInitialMove === false) {
      this.notify("end", this.snapshot.gutterNum);
    }
    this.renderer.removeClass(this.elRef.nativeElement, "as-dragging");
    this.draggedGutterNum = void 0;
    this.cdRef.markForCheck();
    this.snapshot = null;
    this.isWaitingClear = true;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.startPoint = null;
        this.endPoint = null;
        this.isWaitingClear = false;
      });
    });
  }
  notify(type, gutterNum) {
    const sizes = this.getVisibleAreaSizes();
    if (type === "start") {
      this.dragStart.emit({
        gutterNum,
        sizes
      });
    } else if (type === "end") {
      this.dragEnd.emit({
        gutterNum,
        sizes
      });
    } else if (type === "click") {
      this.gutterClick.emit({
        gutterNum,
        sizes
      });
    } else if (type === "dblclick") {
      this.gutterDblClick.emit({
        gutterNum,
        sizes
      });
    } else if (type === "transitionEnd") {
      if (this.transitionEndSubscriber) {
        this.ngZone.run(() => this.transitionEndSubscriber.next(sizes));
      }
    } else if (type === "progress") {
      this.dragProgressSubject.next({
        gutterNum,
        sizes
      });
    }
  }
  ngOnDestroy() {
    this.stopDragging();
  }
  collapseArea(comp, newSize, gutter) {
    const area = this.displayedAreas.find((a) => a.component === comp);
    if (area === void 0) {
      return;
    }
    const whichGutter = gutter === "right" ? 1 : -1;
    if (!area.sizeBeforeCollapse) {
      area.sizeBeforeCollapse = area.size;
      area.gutterBeforeCollapse = whichGutter;
    }
    area.size = newSize;
    const gtr = this.gutterEls.find((f) => f.nativeElement.style.order === `${area.order + whichGutter}`);
    if (gtr) {
      this.renderer.addClass(gtr.nativeElement, "as-split-gutter-collapsed");
    }
    this.updateArea(comp, false, false);
  }
  expandArea(comp) {
    const area = this.displayedAreas.find((a) => a.component === comp);
    if (area === void 0) {
      return;
    }
    if (!area.sizeBeforeCollapse) {
      return;
    }
    area.size = area.sizeBeforeCollapse;
    area.sizeBeforeCollapse = null;
    const gtr = this.gutterEls.find((f) => f.nativeElement.style.order === `${area.order + area.gutterBeforeCollapse}`);
    if (gtr) {
      this.renderer.removeClass(gtr.nativeElement, "as-split-gutter-collapsed");
    }
    this.updateArea(comp, false, false);
  }
  getAriaAreaSizeText(size) {
    if (size === "*") {
      return null;
    }
    return size.toFixed(0) + " " + this.unit;
  }
};
_SplitComponent.ɵfac = function SplitComponent_Factory(t) {
  return new (t || _SplitComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ANGULAR_SPLIT_DEFAULT_OPTIONS, 8));
};
_SplitComponent.ɵcmp = ɵɵdefineComponent({
  type: _SplitComponent,
  selectors: [["as-split"]],
  contentQueries: function SplitComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, SplitGutterDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customGutter = _t.first);
    }
  },
  viewQuery: function SplitComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gutterEls = _t);
    }
  },
  inputs: {
    direction: "direction",
    unit: "unit",
    gutterSize: "gutterSize",
    gutterStep: "gutterStep",
    restrictMove: "restrictMove",
    useTransition: "useTransition",
    disabled: "disabled",
    dir: "dir",
    gutterDblClickDuration: "gutterDblClickDuration",
    gutterClickDeltaPx: "gutterClickDeltaPx",
    gutterAriaLabel: "gutterAriaLabel"
  },
  outputs: {
    transitionEnd: "transitionEnd",
    dragStart: "dragStart",
    dragEnd: "dragEnd",
    gutterClick: "gutterClick",
    gutterDblClick: "gutterDblClick"
  },
  exportAs: ["asSplit"],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [["gutterEls", ""], ["defaultGutterTpl", ""], ["ngFor", "", 3, "ngForOf"], ["role", "separator", "tabindex", "0", "class", "as-split-gutter", 3, "as-dragged", "flex-basis", "order", "keydown", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], ["role", "separator", "tabindex", "0", 1, "as-split-gutter", 3, "keydown", "mousedown", "touchstart", "mouseup", "touchend"], [4, "ngIf", "ngIfElse"], [4, "asSplitGutterDynamicInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext", "ngTemplateOutletInjector"], [1, "as-split-gutter-icon"]],
  template: function SplitComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, SplitComponent_ng_template_1_Template, 1, 1, "ng-template", 2);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.displayedAreas);
    }
  },
  dependencies: [NgForOf, NgIf, NgTemplateOutlet, SplitGutterDynamicInjectorDirective],
  styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{border:none;flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .as-split-gutter.as-split-gutter-collapsed[_ngcontent-%COMP%]{flex-basis:1px!important;pointer-events:none}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}[_nghost-%COMP%]    >.as-split-area .iframe-fix{position:absolute;top:0;left:0;width:100%;height:100%}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:col-resize;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:row-resize;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%], .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area{transition:flex-basis .3s}"],
  changeDetection: 0
});
var SplitComponent = _SplitComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitComponent, [{
    type: Component,
    args: [{
      selector: "as-split",
      exportAs: "asSplit",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content>
    <ng-template
      ngFor
      [ngForOf]="displayedAreas"
      let-area="$implicit"
      let-index="index"
      let-first="first"
      let-last="last"
    >
      <div
        role="separator"
        tabindex="0"
        *ngIf="last === false"
        #gutterEls
        class="as-split-gutter"
        [class.as-dragged]="draggedGutterNum === index + 1"
        [style.flex-basis.px]="gutterSize"
        [style.order]="index * 2 + 1"
        (keydown)="startKeyboardDrag($event, index * 2 + 1, index + 1)"
        (mousedown)="startMouseDrag($event, index * 2 + 1, index + 1)"
        (touchstart)="startMouseDrag($event, index * 2 + 1, index + 1)"
        (mouseup)="clickGutter($event, index + 1)"
        (touchend)="clickGutter($event, index + 1)"
        [attr.aria-label]="gutterAriaLabel"
        [attr.aria-orientation]="direction"
        [attr.aria-valuemin]="area.minSize"
        [attr.aria-valuemax]="area.maxSize"
        [attr.aria-valuenow]="area.size === '*' ? null : area.size"
        [attr.aria-valuetext]="getAriaAreaSizeText(area.size)"
      >
        <ng-container *ngIf="customGutter?.template; else defaultGutterTpl">
          <ng-container *asSplitGutterDynamicInjector="index + 1; let injector">
            <ng-container
              *ngTemplateOutlet="
                customGutter.template;
                context: {
                  areaBefore: area,
                  areaAfter: displayedAreas[index + 1],
                  gutterNum: index + 1,
                  first,
                  last: index === displayedAreas.length - 2,
                  isDragged: draggedGutterNum === index + 1
                };
                injector: injector
              "
            ></ng-container>
          </ng-container>
        </ng-container>
        <ng-template #defaultGutterTpl>
          <div class="as-split-gutter-icon"></div>
        </ng-template>
      </div>
    </ng-template>`,
      encapsulation: ViewEncapsulation$1.Emulated,
      styles: [":host{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}:host>.as-split-gutter{border:none;flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}:host>.as-split-gutter.as-split-gutter-collapsed{flex-basis:1px!important;pointer-events:none}:host>.as-split-gutter>.as-split-gutter-icon{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}:host ::ng-deep>.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}:host ::ng-deep>.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}:host ::ng-deep>.as-split-area .iframe-fix{position:absolute;top:0;left:0;width:100%;height:100%}:host.as-horizontal{flex-direction:row}:host.as-horizontal>.as-split-gutter{flex-direction:row;cursor:col-resize;height:100%}:host.as-horizontal>.as-split-gutter>.as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}:host.as-horizontal ::ng-deep>.as-split-area{height:100%}:host.as-vertical{flex-direction:column}:host.as-vertical>.as-split-gutter{flex-direction:column;cursor:row-resize;width:100%}:host.as-vertical>.as-split-gutter .as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}:host.as-vertical ::ng-deep>.as-split-area{width:100%}:host.as-vertical ::ng-deep>.as-split-area.as-hidden{max-width:0}:host.as-disabled>.as-split-gutter{cursor:default}:host.as-disabled>.as-split-gutter .as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}:host.as-transition.as-init:not(.as-dragging)>.as-split-gutter,:host.as-transition.as-init:not(.as-dragging) ::ng-deep>.as-split-area{transition:flex-basis .3s}\n"]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANGULAR_SPLIT_DEFAULT_OPTIONS]
    }]
  }], {
    customGutter: [{
      type: ContentChild,
      args: [SplitGutterDirective]
    }],
    direction: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    gutterSize: [{
      type: Input
    }],
    gutterStep: [{
      type: Input
    }],
    restrictMove: [{
      type: Input
    }],
    useTransition: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    dir: [{
      type: Input
    }],
    gutterDblClickDuration: [{
      type: Input
    }],
    gutterClickDeltaPx: [{
      type: Input
    }],
    gutterAriaLabel: [{
      type: Input
    }],
    transitionEnd: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }],
    gutterClick: [{
      type: Output
    }],
    gutterDblClick: [{
      type: Output
    }],
    gutterEls: [{
      type: ViewChildren,
      args: ["gutterEls"]
    }]
  });
})();
var _SplitAreaDirective = class _SplitAreaDirective {
  set order(v) {
    this._order = getInputPositiveNumber(v, null);
    this.split.updateArea(this, true, false);
  }
  get order() {
    return this._order;
  }
  set size(v) {
    this._size = getInputPositiveNumber(v, "*");
    this.split.updateArea(this, false, true);
  }
  get size() {
    return this._size;
  }
  set minSize(v) {
    this._minSize = getInputPositiveNumber(v, null);
    this.split.updateArea(this, false, true);
  }
  get minSize() {
    return this._minSize;
  }
  set maxSize(v) {
    this._maxSize = getInputPositiveNumber(v, null);
    this.split.updateArea(this, false, true);
  }
  get maxSize() {
    return this._maxSize;
  }
  set lockSize(v) {
    this._lockSize = getInputBoolean(v);
    this.split.updateArea(this, false, true);
  }
  get lockSize() {
    return this._lockSize;
  }
  set visible(v) {
    this._visible = getInputBoolean(v);
    if (this._visible) {
      this.split.showArea(this);
      this.renderer.removeClass(this.elRef.nativeElement, "as-hidden");
    } else {
      this.split.hideArea(this);
      this.renderer.addClass(this.elRef.nativeElement, "as-hidden");
    }
  }
  get visible() {
    return this._visible;
  }
  constructor(ngZone, renderer, split, elRef) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.split = split;
    this.elRef = elRef;
    this._order = null;
    this._size = "*";
    this._minSize = null;
    this._maxSize = null;
    this._lockSize = false;
    this._visible = true;
    this.lockListeners = [];
    this.renderer.addClass(this.elRef.nativeElement, "as-split-area");
  }
  ngOnInit() {
    this.split.addArea(this);
    this.ngZone.runOutsideAngular(() => {
      this.transitionListener = this.renderer.listen(this.elRef.nativeElement, "transitionend", (event) => {
        if (event.propertyName === "flex-basis") {
          this.split.notify("transitionEnd", -1);
        }
      });
    });
    const iframeFixDiv = this.renderer.createElement("div");
    this.renderer.addClass(iframeFixDiv, "iframe-fix");
    this.dragStartSubscription = this.split.dragStart.subscribe(() => {
      this.renderer.setStyle(this.elRef.nativeElement, "position", "relative");
      this.renderer.appendChild(this.elRef.nativeElement, iframeFixDiv);
    });
    this.dragEndSubscription = this.split.dragEnd.subscribe(() => {
      this.renderer.removeStyle(this.elRef.nativeElement, "position");
      this.renderer.removeChild(this.elRef.nativeElement, iframeFixDiv);
    });
  }
  setStyleOrder(value) {
    this.renderer.setStyle(this.elRef.nativeElement, "order", value);
  }
  setStyleFlex(grow, shrink, basis, isMin, isMax) {
    this.renderer.setStyle(this.elRef.nativeElement, "flex-grow", grow);
    this.renderer.setStyle(this.elRef.nativeElement, "flex-shrink", shrink);
    this.renderer.setStyle(this.elRef.nativeElement, "flex-basis", basis);
    if (isMin === true) {
      this.renderer.addClass(this.elRef.nativeElement, "as-min");
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "as-min");
    }
    if (isMax === true) {
      this.renderer.addClass(this.elRef.nativeElement, "as-max");
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, "as-max");
    }
  }
  lockEvents() {
    this.ngZone.runOutsideAngular(() => {
      this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, "selectstart", () => false));
      this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, "dragstart", () => false));
    });
  }
  unlockEvents() {
    while (this.lockListeners.length > 0) {
      const fct = this.lockListeners.pop();
      if (fct) {
        fct();
      }
    }
  }
  ngOnDestroy() {
    this.unlockEvents();
    if (this.transitionListener) {
      this.transitionListener();
    }
    this.dragStartSubscription?.unsubscribe();
    this.dragEndSubscription?.unsubscribe();
    this.split.removeArea(this);
  }
  collapse(newSize = 0, gutter = "right") {
    this.split.collapseArea(this, newSize, gutter);
  }
  expand() {
    this.split.expandArea(this);
  }
};
_SplitAreaDirective.ɵfac = function SplitAreaDirective_Factory(t) {
  return new (t || _SplitAreaDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SplitComponent), ɵɵdirectiveInject(ElementRef));
};
_SplitAreaDirective.ɵdir = ɵɵdefineDirective({
  type: _SplitAreaDirective,
  selectors: [["as-split-area"], ["", "as-split-area", ""]],
  inputs: {
    order: "order",
    size: "size",
    minSize: "minSize",
    maxSize: "maxSize",
    lockSize: "lockSize",
    visible: "visible"
  },
  exportAs: ["asSplitArea"]
});
var SplitAreaDirective = _SplitAreaDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitAreaDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "as-split-area, [as-split-area]",
      exportAs: "asSplitArea"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: SplitComponent
  }, {
    type: ElementRef
  }], {
    order: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    minSize: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    lockSize: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var _SplitGutterDragHandleDirective = class _SplitGutterDragHandleDirective {
  constructor(gutterNum, elementRef, gutterDir) {
    this.gutterNum = gutterNum;
    this.elementRef = elementRef;
    this.gutterDir = gutterDir;
  }
  ngOnInit() {
    this.gutterDir.addToMap(this.gutterDir.gutterToHandleElementMap, this.gutterNum, this.elementRef);
  }
  ngOnDestroy() {
    this.gutterDir.removedFromMap(this.gutterDir.gutterToHandleElementMap, this.gutterNum, this.elementRef);
  }
};
_SplitGutterDragHandleDirective.ɵfac = function SplitGutterDragHandleDirective_Factory(t) {
  return new (t || _SplitGutterDragHandleDirective)(ɵɵdirectiveInject(GUTTER_NUM_TOKEN), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SplitGutterDirective));
};
_SplitGutterDragHandleDirective.ɵdir = ɵɵdefineDirective({
  type: _SplitGutterDragHandleDirective,
  selectors: [["", "asSplitGutterDragHandle", ""]]
});
var SplitGutterDragHandleDirective = _SplitGutterDragHandleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitGutterDragHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[asSplitGutterDragHandle]"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [GUTTER_NUM_TOKEN]
    }]
  }, {
    type: ElementRef
  }, {
    type: SplitGutterDirective
  }], null);
})();
var _SplitGutterExcludeFromDragDirective = class _SplitGutterExcludeFromDragDirective {
  constructor(gutterNum, elementRef, gutterDir) {
    this.gutterNum = gutterNum;
    this.elementRef = elementRef;
    this.gutterDir = gutterDir;
  }
  ngOnInit() {
    this.gutterDir.addToMap(this.gutterDir.gutterToExcludeDragElementMap, this.gutterNum, this.elementRef);
  }
  ngOnDestroy() {
    this.gutterDir.removedFromMap(this.gutterDir.gutterToExcludeDragElementMap, this.gutterNum, this.elementRef);
  }
};
_SplitGutterExcludeFromDragDirective.ɵfac = function SplitGutterExcludeFromDragDirective_Factory(t) {
  return new (t || _SplitGutterExcludeFromDragDirective)(ɵɵdirectiveInject(GUTTER_NUM_TOKEN), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SplitGutterDirective));
};
_SplitGutterExcludeFromDragDirective.ɵdir = ɵɵdefineDirective({
  type: _SplitGutterExcludeFromDragDirective,
  selectors: [["", "asSplitGutterExcludeFromDrag", ""]]
});
var SplitGutterExcludeFromDragDirective = _SplitGutterExcludeFromDragDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitGutterExcludeFromDragDirective, [{
    type: Directive,
    args: [{
      selector: "[asSplitGutterExcludeFromDrag]"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [GUTTER_NUM_TOKEN]
    }]
  }, {
    type: ElementRef
  }, {
    type: SplitGutterDirective
  }], null);
})();
var _AngularSplitModule = class _AngularSplitModule {
};
_AngularSplitModule.ɵfac = function AngularSplitModule_Factory(t) {
  return new (t || _AngularSplitModule)();
};
_AngularSplitModule.ɵmod = ɵɵdefineNgModule({
  type: _AngularSplitModule,
  declarations: [SplitComponent, SplitAreaDirective, SplitGutterDirective, SplitGutterDragHandleDirective, SplitGutterDynamicInjectorDirective, SplitGutterExcludeFromDragDirective],
  imports: [CommonModule],
  exports: [SplitComponent, SplitAreaDirective, SplitGutterDirective, SplitGutterDragHandleDirective, SplitGutterExcludeFromDragDirective]
});
_AngularSplitModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var AngularSplitModule = _AngularSplitModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularSplitModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [SplitComponent, SplitAreaDirective, SplitGutterDirective, SplitGutterDragHandleDirective, SplitGutterDynamicInjectorDirective, SplitGutterExcludeFromDragDirective],
      exports: [SplitComponent, SplitAreaDirective, SplitGutterDirective, SplitGutterDragHandleDirective, SplitGutterExcludeFromDragDirective]
    }]
  }], null, null);
})();
export {
  ANGULAR_SPLIT_DEFAULT_OPTIONS,
  AngularSplitModule,
  SplitAreaDirective,
  SplitComponent,
  SplitGutterDirective,
  SplitGutterDragHandleDirective,
  SplitGutterExcludeFromDragDirective
};
//# sourceMappingURL=angular-split.js.map