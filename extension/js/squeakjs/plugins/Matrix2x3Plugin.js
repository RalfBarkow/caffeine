/* Smalltalk from Squeak4.5 with VMMaker 4.13.6 translated as JS source on 3 November 2014 1:52:21 pm */
/* Automatically generated by
	JSPluginCodeGenerator VMMakerJS-bf.15 uuid: fd4e10f2-3773-4e80-8bb5-c4b471a014e5
   from
	Matrix2x3Plugin VMMaker-bf.353 uuid: 8ae25e7e-8d2c-451e-8277-598b30e9c002
 */

window.module("users.bert.SqueakJS.plugins.Matrix2x3Plugin").requires("users.bert.SqueakJS.vm").toRun(function() {
"use strict";

var VM_PROXY_MAJOR = 1;
var VM_PROXY_MINOR = 11;

/*** Functions ***/
function CLASSOF(obj) { return typeof obj === "number" ? interpreterProxy.classSmallInteger() : obj.sqClass }
function SIZEOF(obj) { return obj.pointers ? obj.pointers.length : obj.words ? obj.words.length : obj.bytes ? obj.bytes.length : 0 }
function BYTESIZEOF(obj) { return obj.bytes ? obj.bytes.length : obj.words ? obj.words.length * 4 : 0 }
function DIV(a, b) { return Math.floor(a / b) | 0; }   // integer division
function MOD(a, b) { return a - DIV(a, b) * b | 0; }   // signed modulus
function SHL(a, b) { return b > 31 ? 0 : a << b; }     // fix JS shift
function SHR(a, b) { return b > 31 ? 0 : a >>> b; }    // fix JS shift
function SHIFT(a, b) { return b < 0 ? (b < -31 ? 0 : a >>> (0-b) ) : (b > 31 ? 0 : a << b); }

/*** Variables ***/
var interpreterProxy = null;
var m23ArgX = 0;
var m23ArgY = 0;
var m23ResultX = 0;
var m23ResultY = 0;
var moduleName = "Matrix2x3Plugin 3 November 2014 (e)";



/*	Note: This is hardcoded so it can be run from Squeak.
	The module name is used for validating a module *after*
	it is loaded to check if it does really contain the module
	we're thinking it contains. This is important! */

function getModuleName() {
	return moduleName;
}

function halt() {
	;
}


/*	Load the argument matrix */

function loadArgumentMatrix(matrix) {
	if (interpreterProxy.failed()) {
		return null;
	}
	if (!(interpreterProxy.isWords(matrix) && (SIZEOF(matrix) === 6))) {
		interpreterProxy.primitiveFail();
		return null;
	}
	return matrix.wordsAsFloat32Array();
}


/*	Load the argument point into m23ArgX and m23ArgY */

function loadArgumentPoint(point) {
	var isInt;
	var oop;

	if (interpreterProxy.failed()) {
		return null;
	}
	if (CLASSOF(point) !== interpreterProxy.classPoint()) {
		return interpreterProxy.primitiveFail();
	}
	oop = interpreterProxy.fetchPointerofObject(0, point);
	isInt = typeof oop === "number";
	if (!(isInt || (oop.isFloat))) {
		return interpreterProxy.primitiveFail();
	}
	if (isInt) {
		m23ArgX = oop;
	} else {
		m23ArgX = interpreterProxy.floatValueOf(oop);
	}
	oop = interpreterProxy.fetchPointerofObject(1, point);
	isInt = typeof oop === "number";
	if (!(isInt || (oop.isFloat))) {
		return interpreterProxy.primitiveFail();
	}
	if (isInt) {
		m23ArgY = oop;
	} else {
		m23ArgY = interpreterProxy.floatValueOf(oop);
	}
}


/*	Multiply matrix m1 with m2 and store the result into m3. */

function matrix2x3ComposeMatrixwithinto(m1, m2, m3) {
	var a11;
	var a12;
	var a13;
	var a21;
	var a22;
	var a23;

	a11 = (m1[0] * m2[0]) + (m1[1] * m2[3]);
	a12 = (m1[0] * m2[1]) + (m1[1] * m2[4]);
	a13 = ((m1[0] * m2[2]) + (m1[1] * m2[5])) + m1[2];
	a21 = (m1[3] * m2[0]) + (m1[4] * m2[3]);
	a22 = (m1[3] * m2[1]) + (m1[4] * m2[4]);
	a23 = ((m1[3] * m2[2]) + (m1[4] * m2[5])) + m1[5];
	m3[0] = a11;
	m3[1] = a12;
	m3[2] = a13;
	m3[3] = a21;
	m3[4] = a22;
	m3[5] = a23;
}


/*	Invert the pre-loaded argument point by the given matrix */

function matrix2x3InvertPoint(m) {
	var det;
	var detX;
	var detY;
	var x;
	var y;

	x = m23ArgX - m[2];
	y = m23ArgY - m[5];
	det = (m[0] * m[4]) - (m[1] * m[3]);
	if (det === 0.0) {
		return interpreterProxy.primitiveFail();
	}
	det = 1.0 / det;
	detX = (x * m[4]) - (m[1] * y);
	detY = (m[0] * y) - (x * m[3]);
	m23ResultX = detX * det;
	m23ResultY = detY * det;
}


/*	Transform the pre-loaded argument point by the given matrix */

function matrix2x3TransformPoint(m) {
	m23ResultX = ((m23ArgX * m[0]) + (m23ArgY * m[1])) + m[2];
	m23ResultY = ((m23ArgX * m[3]) + (m23ArgY * m[4])) + m[5];
}

function okayIntValue(value) {
	return (value >= -1073741824) && (m23ResultX <= 1073741823);
}

function primitiveComposeMatrix() {
	var m1;
	var m2;
	var m3;
	var result;

	;
	m3 = loadArgumentMatrix((result = interpreterProxy.stackObjectValue(0)));
	m2 = loadArgumentMatrix(interpreterProxy.stackObjectValue(1));
	m1 = loadArgumentMatrix(interpreterProxy.stackObjectValue(2));
	if (interpreterProxy.failed()) {
		return null;
	}
	matrix2x3ComposeMatrixwithinto(m1, m2, m3);
	interpreterProxy.popthenPush(3, result);
}

function primitiveInvertPoint() {
	var matrix;

	loadArgumentPoint(interpreterProxy.stackObjectValue(0));
	matrix = loadArgumentMatrix(interpreterProxy.stackObjectValue(1));
	if (interpreterProxy.failed()) {
		return null;
	}
	matrix2x3InvertPoint(matrix);
	if (!interpreterProxy.failed()) {
		roundAndStoreResultPoint(2);
	}
}

function primitiveInvertRectInto() {
	var cornerX;
	var cornerY;
	var dstOop;
	var matrix;
	var maxX;
	var maxY;
	var minX;
	var minY;
	var originX;
	var originY;
	var srcOop;

	dstOop = interpreterProxy.stackObjectValue(0);
	srcOop = interpreterProxy.stackObjectValue(1);
	matrix = loadArgumentMatrix(interpreterProxy.stackObjectValue(2));
	if (interpreterProxy.failed()) {
		return null;
	}
	if (CLASSOF(srcOop) !== CLASSOF(dstOop)) {
		return interpreterProxy.primitiveFail();
	}
	if (!interpreterProxy.isPointers(srcOop)) {
		return interpreterProxy.primitiveFail();
	}
	if (SIZEOF(srcOop) !== 2) {
		return interpreterProxy.primitiveFail();
	}
	loadArgumentPoint(interpreterProxy.fetchPointerofObject(0, srcOop));
	if (interpreterProxy.failed()) {
		return null;
	}
	originX = m23ArgX;
	originY = m23ArgY;
	matrix2x3InvertPoint(matrix);
	minX = (maxX = m23ResultX);

	/* Load bottom-right point */

	minY = (maxY = m23ResultY);
	loadArgumentPoint(interpreterProxy.fetchPointerofObject(1, srcOop));
	if (interpreterProxy.failed()) {
		return null;
	}
	cornerX = m23ArgX;
	cornerY = m23ArgY;
	matrix2x3InvertPoint(matrix);
	minX = Math.min(minX, m23ResultX);
	maxX = Math.max(maxX, m23ResultX);
	minY = Math.min(minY, m23ResultY);

	/* Load top-right point */

	maxY = Math.max(maxY, m23ResultY);
	m23ArgX = cornerX;
	m23ArgY = originY;
	matrix2x3InvertPoint(matrix);
	minX = Math.min(minX, m23ResultX);
	maxX = Math.max(maxX, m23ResultX);
	minY = Math.min(minY, m23ResultY);

	/* Load bottom-left point */

	maxY = Math.max(maxY, m23ResultY);
	m23ArgX = originX;
	m23ArgY = cornerY;
	matrix2x3InvertPoint(matrix);
	minX = Math.min(minX, m23ResultX);
	maxX = Math.max(maxX, m23ResultX);
	minY = Math.min(minY, m23ResultY);
	maxY = Math.max(maxY, m23ResultY);
	if (!interpreterProxy.failed()) {
		dstOop = roundAndStoreResultRectx0y0x1y1(dstOop, minX, minY, maxX, maxY);
	}
	if (!interpreterProxy.failed()) {
		interpreterProxy.popthenPush(3, dstOop);
	}
}

function primitiveIsIdentity() {
	var matrix;

	matrix = loadArgumentMatrix(interpreterProxy.stackObjectValue(0));
	if (interpreterProxy.failed()) {
		return null;
	}
	interpreterProxy.pop(1);
	interpreterProxy.pushBool((((((matrix[0] === 1.0) && (matrix[1] === 0.0)) && (matrix[2] === 0.0)) && (matrix[3] === 0.0)) && (matrix[4] === 1.0)) && (matrix[5] === 0.0));
}

function primitiveIsPureTranslation() {
	var matrix;

	matrix = loadArgumentMatrix(interpreterProxy.stackObjectValue(0));
	if (interpreterProxy.failed()) {
		return null;
	}
	interpreterProxy.pop(1);
	interpreterProxy.pushBool((((matrix[0] === 1.0) && (matrix[1] === 0.0)) && (matrix[3] === 0.0)) && (matrix[4] === 1.0));
}

function primitiveTransformPoint() {
	var matrix;

	loadArgumentPoint(interpreterProxy.stackObjectValue(0));
	matrix = loadArgumentMatrix(interpreterProxy.stackObjectValue(1));
	if (interpreterProxy.failed()) {
		return null;
	}
	matrix2x3TransformPoint(matrix);
	roundAndStoreResultPoint(2);
}

function primitiveTransformRectInto() {
	var cornerX;
	var cornerY;
	var dstOop;
	var matrix;
	var maxX;
	var maxY;
	var minX;
	var minY;
	var originX;
	var originY;
	var srcOop;

	dstOop = interpreterProxy.stackObjectValue(0);
	srcOop = interpreterProxy.stackObjectValue(1);
	matrix = loadArgumentMatrix(interpreterProxy.stackObjectValue(2));
	if (interpreterProxy.failed()) {
		return null;
	}
	if (CLASSOF(srcOop) !== CLASSOF(dstOop)) {
		return interpreterProxy.primitiveFail();
	}
	if (!interpreterProxy.isPointers(srcOop)) {
		return interpreterProxy.primitiveFail();
	}
	if (SIZEOF(srcOop) !== 2) {
		return interpreterProxy.primitiveFail();
	}
	loadArgumentPoint(interpreterProxy.fetchPointerofObject(0, srcOop));
	if (interpreterProxy.failed()) {
		return null;
	}
	originX = m23ArgX;
	originY = m23ArgY;
	matrix2x3TransformPoint(matrix);
	minX = (maxX = m23ResultX);

	/* Load bottom-right point */

	minY = (maxY = m23ResultY);
	loadArgumentPoint(interpreterProxy.fetchPointerofObject(1, srcOop));
	if (interpreterProxy.failed()) {
		return null;
	}
	cornerX = m23ArgX;
	cornerY = m23ArgY;
	matrix2x3TransformPoint(matrix);
	minX = Math.min(minX, m23ResultX);
	maxX = Math.max(maxX, m23ResultX);
	minY = Math.min(minY, m23ResultY);

	/* Load top-right point */

	maxY = Math.max(maxY, m23ResultY);
	m23ArgX = cornerX;
	m23ArgY = originY;
	matrix2x3TransformPoint(matrix);
	minX = Math.min(minX, m23ResultX);
	maxX = Math.max(maxX, m23ResultX);
	minY = Math.min(minY, m23ResultY);

	/* Load bottom-left point */

	maxY = Math.max(maxY, m23ResultY);
	m23ArgX = originX;
	m23ArgY = cornerY;
	matrix2x3TransformPoint(matrix);
	minX = Math.min(minX, m23ResultX);
	maxX = Math.max(maxX, m23ResultX);
	minY = Math.min(minY, m23ResultY);
	maxY = Math.max(maxY, m23ResultY);
	dstOop = roundAndStoreResultRectx0y0x1y1(dstOop, minX, minY, maxX, maxY);
	if (!interpreterProxy.failed()) {
		interpreterProxy.popthenPush(3, dstOop);
	}
}


/*	Store the result of a previous operation.
	Fail if we cannot represent the result as SmallInteger */

function roundAndStoreResultPoint(nItemsToPop) {
	m23ResultX += 0.5;
	m23ResultY += 0.5;
	if (!okayIntValue(m23ResultX)) {
		return interpreterProxy.primitiveFail();
	}
	if (!okayIntValue(m23ResultY)) {
		return interpreterProxy.primitiveFail();
	}
	interpreterProxy.popthenPush(nItemsToPop, interpreterProxy.makePointwithxValueyValue((m23ResultX|0), (m23ResultY|0)));
}


/*	Check, round and store the result of a rectangle operation */

function roundAndStoreResultRectx0y0x1y1(dstOop, x0, y0, x1, y1) {
	var cornerOop;
	var maxX;
	var maxY;
	var minX;
	var minY;
	var originOop;
	var rectOop;

	minX = x0 + 0.5;
	if (!okayIntValue(minX)) {
		return interpreterProxy.primitiveFail();
	}
	maxX = x1 + 0.5;
	if (!okayIntValue(maxX)) {
		return interpreterProxy.primitiveFail();
	}
	minY = y0 + 0.5;
	if (!okayIntValue(minY)) {
		return interpreterProxy.primitiveFail();
	}
	maxY = y1 + 0.5;
	if (!okayIntValue(maxY)) {
		return interpreterProxy.primitiveFail();
	}
	interpreterProxy.pushRemappableOop(dstOop);
	originOop = interpreterProxy.makePointwithxValueyValue((minX|0), (minY|0));
	interpreterProxy.pushRemappableOop(originOop);
	cornerOop = interpreterProxy.makePointwithxValueyValue((maxX|0), (maxY|0));
	originOop = interpreterProxy.popRemappableOop();
	rectOop = interpreterProxy.popRemappableOop();
	interpreterProxy.storePointerofObjectwithValue(0, rectOop, originOop);
	interpreterProxy.storePointerofObjectwithValue(1, rectOop, cornerOop);
	return rectOop;
}


/*	Note: This is coded so that is can be run from Squeak. */

function setInterpreter(anInterpreter) {
	var ok;

	interpreterProxy = anInterpreter;
	ok = interpreterProxy.majorVersion() == VM_PROXY_MAJOR;
	if (ok === false) {
		return false;
	}
	ok = interpreterProxy.minorVersion() >= VM_PROXY_MINOR;
	return ok;
}


window.Squeak.registerExternalModule("Matrix2x3Plugin", {
	primitiveInvertPoint: primitiveInvertPoint,
	primitiveInvertRectInto: primitiveInvertRectInto,
	primitiveIsIdentity: primitiveIsIdentity,
	primitiveComposeMatrix: primitiveComposeMatrix,
	setInterpreter: setInterpreter,
	primitiveTransformRectInto: primitiveTransformRectInto,
	primitiveIsPureTranslation: primitiveIsPureTranslation,
	getModuleName: getModuleName,
	primitiveTransformPoint: primitiveTransformPoint,
});

}); // end of module
