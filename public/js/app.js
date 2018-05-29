/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

$(document).ready(function () {
	$('.updateButton').on('click', function (event) {
		event.preventDefault();
		var formUpdate = $(this).parent();
		var urlAction = formUpdate.attr('action');
		var dataString = formUpdate.serialize();
		var order_id = $(this).attr("data-id");
		$.ajax({
			type: "PATCH",
			url: urlAction,
			data: dataString,
			dataType: "json",
			success: function success(data) {
				$('#order_title_' + order_id).html(data.title);
				$('#order_desc_' + order_id).html(data.description);
			},
			error: function error() {
				alert("Update fields can't be blank and must have at least 6 characters!!. Please check the fields");
			}
		});
		$('.edit_button_' + order_id).css("display", "block");
		$('.form_number_' + order_id).css("display", "none");
		$('.single_order_' + order_id).css("display", "block");
	});

	/*$('.deleteButton').on('click', function(event){
 	event.preventDefault();
 	let formDelete = $(this).parent();
 	let urlAction = formDelete.attr('action');
 	var dataString = formDelete.serialize();
 	let order_id = $(this).attr("data-id");
 	console.log(formDelete);
 	console.log(urlAction);
 	console.log(dataString);
 	$.ajax({
 		type: "DELETE",
 		url: urlAction,
 		data: dataString,
 		dataType: "json",
 		success: function(data){
 			$('#order_title_'+order_id).html("<strike>"+data.title+"</strike>");
 			$('#order_desc_'+order_id).html("<strike>"+data.description+"</strike>");
 		},
 		error: function(){
 			alert("Deleteing order failed");
 		}
 	})
 	});*/

	$('.toggle_edit_form').on('click', function () {
		$(this).css("display", "none");
		var order_id = $(this).attr("data-id");
		$('.form_number_' + order_id).css("display", "block");
		$('.single_order_' + order_id).css("display", "none");
	});
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);