/*
 * Mobiscroll v2.8.3
 * http://mobiscroll.com
 *
 * Copyright 2010-2013, Acid Media
 * Licensed under the MIT license.
 *
 */
(function(E){function K(M){var N;for(N in M){if(B[M[N]]!==undefined){return true}}return false}function G(){var M=["Webkit","Moz","O","ms"],N;for(N in M){if(K([M[N]+"Transform"])){return"-"+M[N].toLowerCase()+"-"}}return""}function J(O,N){var P=O.originalEvent,M=O.changedTouches;return M||(P&&P.changedTouches)?(P?P.changedTouches[0]["page"+N]:M[0]["page"+N]):O["page"+N]}function D(M,O,N){var P=M;if(typeof O==="object"){return M.each(function(){if(!this.id){this.id="mobiscroll"+(++A)}if(C[this.id]){C[this.id].destroy()}new E.mobiscroll.classes[O.component||"Scroller"](this,O)})}if(typeof O==="string"){M.each(function(){var Q,R=C[this.id];if(R&&R[O]){Q=R[O].apply(this,Array.prototype.slice.call(N,1));if(Q!==undefined){P=Q;return false}}})}return P}var A=+new Date,C={},F=E.extend,B=document.createElement("modernizr").style,H=K(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]),L=G(),I=L.replace(/^\-/,"").replace(/\-$/,"").replace("moz","Moz");E.fn.mobiscroll=function(M){F(this,E.mobiscroll.components);return D(this,M,arguments)};E.mobiscroll=E.mobiscroll||{util:{prefix:L,jsPrefix:I,has3d:H,getCoord:J},presets:{},themes:{},i18n:{},instances:C,classes:{},components:{},presetShort:function(M,N){this.components[M]=function(O){return D(this,F(O,{component:N,preset:M}),arguments)}}};E.scroller=E.scroller||E.mobiscroll;E.fn.scroller=E.fn.scroller||E.fn.mobiscroll})(jQuery);