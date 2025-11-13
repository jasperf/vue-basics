/* globals Vue */
(function () {

  const DragAndDrop = {
    install(app, options = {}) {
      // Create a shared drag state
      let dragSrcEl = null;

      app.directive('drag-and-drop', {
        mounted(el, binding, vnode) {
          const { instance } = vnode.ctx;
          const params = binding.value || {};

          // Default values
          const draggable = params.draggable !== false;
          const droppable = params.droppable !== false;
          const emptyFn = () => {};

          // Event handlers
          const handleDragStart = function (e) {
            e.target.classList.add('dragging');
            dragSrcEl = e.target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', '*');

            if (params.dragStart && typeof instance[params.dragStart] === 'function') {
              instance[params.dragStart](e.target, e);
            }
          };

          const handleDragOver = function(e) {
            if (e.preventDefault) {
              e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            e.target.classList.add('drag-over');

            if (params.dragOver && typeof instance[params.dragOver] === 'function') {
              instance[params.dragOver](e.target, e);
            }
            return false;
          };

          const handleDragEnter = function(e) {
            if (params.dragEnter && typeof instance[params.dragEnter] === 'function') {
              instance[params.dragEnter](e.target, e);
            }
            e.target.classList.add('drag-enter');
          };

          const handleDragLeave = function(e) {
            if (params.dragLeave && typeof instance[params.dragLeave] === 'function') {
              instance[params.dragLeave](e.target, e);
            }
            e.target.classList.remove('drag-enter');
          };

          const handleDrag = function(e) {
            if (params.drag && typeof instance[params.drag] === 'function') {
              instance[params.drag](e.target, e);
            }
          };

          const handleDragEnd = function(e) {
            e.target.classList.remove('dragging', 'drag-over', 'drag-enter');
            if (params.dragEnd && typeof instance[params.dragEnd] === 'function') {
              instance[params.dragEnd](e.target, e);
            }
          };

          const handleDrop = function(e) {
            e.preventDefault();
            if (e.stopPropagation) {
              e.stopPropagation();
            }

            if (dragSrcEl != e.target) {
              if (params.drop && typeof instance[params.drop] === 'function') {
                const targetEl = (e.target.draggable || draggable) ? e.target : e.target.parentElement;
                instance[params.drop](dragSrcEl, targetEl, e);
              }
            }
            dragSrcEl = null;
            return false;
          };

          // Store handlers on element for cleanup
          el._dndHandlers = {
            dragstart: draggable ? handleDragStart : emptyFn,
            dragenter: draggable ? handleDragEnter : emptyFn,
            dragover: handleDragOver,
            drag: draggable ? handleDrag : emptyFn,
            dragleave: draggable ? handleDragLeave : emptyFn,
            dragend: draggable ? handleDragEnd : emptyFn,
            drop: droppable ? handleDrop : emptyFn
          };

          // Setup listeners
          if (draggable) {
            el.setAttribute('draggable', 'true');
          }

          Object.entries(el._dndHandlers).forEach(([event, handler]) => {
            el.addEventListener(event, handler, false);
          });
        },

        unmounted(el) {
          // Cleanup
          el.classList.remove('dragging', 'drag-over', 'drag-enter');
          el.removeAttribute('draggable');

          if (el._dndHandlers) {
            Object.entries(el._dndHandlers).forEach(([event, handler]) => {
              el.removeEventListener(event, handler);
            });
            delete el._dndHandlers;
          }
        }
      });
    }
  };

  if (typeof exports == "object") {
    module.exports = DragAndDrop;
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return DragAndDrop; });
  } else if (window.Vue) {
    window.DragAndDrop = DragAndDrop;
  }
})();
