(module
 (import "wasm" "nextByte" (func $nextByte (result i32)))
 (import "wasm" "receiverBeDirty" (func $receiverBeDirty))
 (import "wasm" "pointersAt" (func $pointersAt (param i32) (param i32) (result i32)))
 (import "wasm" "pointersAtPut" (func $pointersAtPut (param i32) (param i32) (param i32)))
 (import "wasm" "homeContextPointersAtPut" (func $homeContextPointersAtPut (param i32) (param i32)))
 (import "wasm" "push" (func $push (param i32)))
 (import "wasm" "extendedPush" (func $extendedPush (param i32)))
 (import "wasm" "extendedStore" (func $extendedStore (param i32)))
 (import "wasm" "extendedStorePop" (func $extendedStorePop (param i32)))
 (import "wasm" "pop" (func $pop (result i32)))
 (import "wasm" "methodGetLiteral" (func $methodGetLiteral (param i32) (result i32)))
 (import "wasm" "methodGetSelector" (func $methodGetSelector (param i32) (result i32)))
 (import "wasm" "doReturn" (func $doReturn (param i32) (param i32) (result i32)))
 (import "wasm" "nono" (func $nono (result i32)))
 (import "wasm" "send" (func $send (param i32) (param i32) (param i32) (result i32)))
 (import "wasm" "top" (func $top (result i32)))
 (import "wasm" "exportThisContext" (func $exportThisContext (result i32)))
 (import "wasm" "pushNewArray" (func $pushNewArray (param i32) (result i32)))
 (import "wasm" "callPrimBytecode" (func $callPrimBytecode (result i32)))
 (import "wasm" "pushClosureCopy" (func $pushClosureCopy (result i32)))
 (import "wasm" "jumpIfFalse" (func $jumpIfFalse (param i32) (result i32)))
 (import "wasm" "jumpIfTrue" (func $jumpIfTrue (param i32) (result i32)))
 (import "wasm" "checkForInterrupts" (func $checkForInterrupts (result i32)))
 (import "wasm" "stackIntOrFloat" (func $stackIntOrFloat (param i32) (result i32)))
 (import "wasm" "stackInteger" (func $stackInteger (param i32) (result i32)))
 (import "wasm" "mod" (func $mod (param i32) (param i32) (result i32)))
 (import "wasm" "pop2AndPushBoolResult" (func $pop2AndPushBoolResult (param i32) (result i32)))
 (import "wasm" "pop2AndPushIntResult" (func $pop2AndPushIntResult (param i32) (result i32)))
 (import "wasm" "sendSpecial" (func $sendSpecial (param i32) (result i32)))
 (import "wasm" "primitiveMakePoint" (func $primitiveMakePoint (param i32) (param i32) (result i32)))
 (import "wasm" "quickSendOther" (func $quickSendOther (param i32) (param i32) (result i32)))
 (import "wasm" "pop2AndPushNumResult" (func $pop2AndPushNumResult (param i32) (result i32)))
 (import "wasm" "doubleExtendedDoAnything" (func $doubleExtendedDoAnything (param i32) (result i32)))

 (import "wasm" "setByteCodeCount" (func $setByteCodeCount (param i32)))
 (import "wasm" "setPC" (func $setPC (param i32)))
 (import "wasm" "setSuccess" (func $setSuccess (param i32)))
 (import "wasm" "setResultIsFloat" (func $setResultIsFloat (param i32)))

 (import "wasm" "thePC" (func $thePC (result i32)))
 (import "wasm" "theByteCodeCount" (func $theByteCodeCount (result i32)))
 (import "wasm" "theInterruptCheckCounter" (func $theInterruptCheckCounter (result i32)))
 (import "wasm" "contextTempFrameStart" (func $contextTempFrameStart (result i32)))
 (import "wasm" "associationValue" (func $associationValue (result i32)))
 (import "wasm" "theReceiver" (func $theReceiver (result i32)))
 (import "wasm" "theTrueObj" (func $theTrueObj (result i32)))
 (import "wasm" "theFalseObj" (func $theFalseObj (result i32)))
 (import "wasm" "theNilObj" (func $theNilObj (result i32)))
 (import "wasm" "theActiveContext" (func $theActiveContext (result i32)))
 (import "wasm" "theHomeContext" (func $theHomeContext (result i32)))
 (import "wasm" "blockContextCaller" (func $blockContextCaller (result i32)))
 
 (func $interpretOne (export "interpretOne")
       (local $firstInstructionByte i32)
       (local $secondInstructionByte i32)
       (local $temp i32)

       call $theByteCodeCount
       i32.const 1
       i32.add
       call $setByteCodeCount

       call $nextByte
       local.set $firstInstructionByte
       local.get $firstInstructionByte
       i32.const 0xF
       i32.le_u

       (if
	(then
	 call $theReceiver
	 local.get $firstInstructionByte
	 i32.const 15
	 i32.and
	 call $pointersAt
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x1F
       i32.le_u

       (if
	(then
	 call $theHomeContext
	 call $contextTempFrameStart
	 local.get $firstInstructionByte
	 i32.const 15
	 i32.and
	 i32.add
	 call $pointersAt
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x3F
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 i32.const 31
	 i32.and
	 call $methodGetLiteral
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x5F
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 i32.const 31
	 i32.and
	 call $methodGetLiteral
	 call $associationValue
	 call $pointersAt
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x67
       i32.le_u

       (if
	(then
	 call $receiverBeDirty
	 call $theReceiver
	 i32.const 7
	 local.get $firstInstructionByte
	 i32.and
	 call $pop
	 call $pointersAtPut
	 return))

       local.get $firstInstructionByte
       i32.const 0x6F
       i32.le_u

       (if
	(then
	 call $contextTempFrameStart
	 local.get $firstInstructionByte
	 i32.const 7
	 i32.and
	 i32.add
	 call $pop
	 call $homeContextPointersAtPut
	 return))

       local.get $firstInstructionByte
       i32.const 0x70
       i32.eq

       (if
	(then
	 call $theReceiver
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x71
       i32.eq

       (if
	(then
	 call $theTrueObj
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x72
       i32.eq

       (if
	(then
	 call $theFalseObj
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x73
       i32.eq

       (if
	(then
	 call $theNilObj
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x74
       i32.eq

       (if
	(then
	 i32.const -1
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x75
       i32.eq

       (if
	(then
	 i32.const 0
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x76
       i32.eq

       (if
	(then
	 i32.const 1
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x77
       i32.eq

       (if
	(then
	 i32.const 2
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x78
       i32.eq

       (if
	(then
	 call $theReceiver
	 i32.const 0
	 call $doReturn
	 return))

       local.get $firstInstructionByte
       i32.const 0x79
       i32.eq

       (if
	(then
	 call $theTrueObj
	 i32.const 0
	 call $doReturn
	 return))

       local.get $firstInstructionByte
       i32.const 0x7A
       i32.eq

       (if
	(then
	 call $theFalseObj
	 i32.const 0
	 call $doReturn
	 return))

       local.get $firstInstructionByte
       i32.const 0x7B
       i32.eq

       (if
	(then
	 call $theNilObj
	 i32.const 0
	 call $doReturn
	 return))

       local.get $firstInstructionByte
       i32.const 0x7C
       i32.eq

       (if
	(then
	 call $pop
	 i32.const 0
	 call $doReturn
	 return))

       local.get $firstInstructionByte
       i32.const 0x7D
       i32.eq

       (if
	(then
	 call $pop
	 call $theActiveContext
	 call $blockContextCaller
	 call $pointersAt
	 call $doReturn
	 return))

       local.get $firstInstructionByte
       i32.const 0x7E
       i32.eq

       (if
	(then
	 call $nono
	 return))

       local.get $firstInstructionByte
       i32.const 0x7F
       i32.eq

       (if
	(then
	 call $nono
	 return))

       local.get $firstInstructionByte
       i32.const 0x80
       i32.eq

       (if
	(then
	 call $nextByte
	 call $extendedPush
	 return))

       local.get $firstInstructionByte
       i32.const 0x81
       i32.eq

       (if
	(then
	 call $nextByte
	 call $extendedStore
	 return))

       local.get $firstInstructionByte
       i32.const 0x82
       i32.eq

       (if
	(then
	 call $nextByte
	 call $extendedStorePop
	 return))

       local.get $firstInstructionByte
       i32.const 0x83
       i32.eq

       (if
	(then
	 call $nextByte
	 local.set $secondInstructionByte
 	 local.get $secondInstructionByte
	 i32.const 31
	 i32.and
	 call $methodGetSelector
	 local.get $secondInstructionByte
	 i32.const 5
	 i32.shr_u
	 i32.const 0
	 call $send
	 return))

       local.get $firstInstructionByte
       i32.const 0x84
       i32.eq

       (if
	(then
	 call $nextByte
	 call $doubleExtendedDoAnything
	 return))
       
       local.get $firstInstructionByte
       i32.const 0x85
       i32.eq
       
       (if
	(then
	 call $nextByte
	 local.set $secondInstructionByte
	 local.get $secondInstructionByte
	 i32.const 31
	 i32.and
	 call $methodGetSelector
	 local.get $secondInstructionByte
	 i32.const 5
	 i32.shr_u
	 i32.const 1
	 call $send
	 return))

       local.get $firstInstructionByte
       i32.const 0x86
       i32.eq
       
       (if
	(then
	 call $nextByte
	 local.set $secondInstructionByte
	 local.get $secondInstructionByte
	 i32.const 63
	 i32.and
	 call $methodGetSelector
	 local.get $secondInstructionByte
	 i32.const 6
	 i32.shr_u
	 i32.const 0
	 call $send
	 return))

       local.get $firstInstructionByte
       i32.const 0x87
       i32.eq

       (if
	(then
	 call $pop
	 return))

       local.get $firstInstructionByte
       i32.const 0x88
       i32.eq

       (if
	(then
	 call $top
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x89
       i32.eq

       (if
	(then
	 call $exportThisContext
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x8A
       i32.eq

       (if
	(then
	 call $nextByte
	 call $pushNewArray
	 return))

       local.get $firstInstructionByte
       i32.const 0x8B
       i32.eq

       (if
	(then
	 call $callPrimBytecode
	 return))

       local.get $firstInstructionByte
       i32.const 0x8C
       i32.eq

       (if
	(then
	 call $nextByte
	 local.set $secondInstructionByte
	 call $theHomeContext
	 call $contextTempFrameStart
	 call $nextByte
	 i32.add
	 call $pointersAt
	 local.get $secondInstructionByte
	 call $pointersAt
	 call $push
	 return))

       local.get $firstInstructionByte
       i32.const 0x8D
       i32.eq
       
       (if
	(then
	 call $nextByte
	 local.set $secondInstructionByte
	 call $theHomeContext
	 call $contextTempFrameStart
	 call $nextByte
	 i32.add
	 call $pointersAt
	 local.get $secondInstructionByte
	 call $top
	 call $pointersAtPut
	 return))

       local.get $firstInstructionByte
       i32.const 0x8E
       i32.eq
       
       (if
	(then
	 call $nextByte
	 local.set $secondInstructionByte
	 call $theHomeContext
	 call $contextTempFrameStart
	 call $nextByte
	 i32.add
	 call $pointersAt
	 local.get $secondInstructionByte
	 call $top
	 call $pointersAtPut
	 call $pop
	 return))

       local.get $firstInstructionByte
       i32.const 0x8F
       i32.eq

       (if
	(then
	 call $pushClosureCopy
	 return))

       local.get $firstInstructionByte
       i32.const 0x97
       i32.le_u

       (if
	(then
	 call $thePC
	 local.get $firstInstructionByte
	 i32.const 7
	 i32.and
	 i32.const 1
	 i32.add
	 i32.add
	 call $setPC
	 return))

       local.get $firstInstructionByte
       i32.const 0x9F
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 i32.const 7
	 i32.and
	 i32.const 1
	 i32.add
	 call $jumpIfFalse
	 return))

       local.get $firstInstructionByte
       i32.const 0xA7
       i32.le_u

       (if
	(then
	 call $nextByte
	 local.set $secondInstructionByte
	 call $thePC
	 local.get $firstInstructionByte
	 i32.const 7
	 i32.and
	 i32.const 4
	 i32.sub
	 i32.const 256
	 i32.mul
	 local.get $secondInstructionByte
	 i32.add
	 i32.add
	 call $setPC

	 local.get $firstInstructionByte
	 i32.const 7
	 i32.and
	 i32.const 4
	 i32.lt_u

	 (if
	  (then
	   call $theInterruptCheckCounter
	   i32.const 1
	   i32.sub
	   i32.const 0
	   i32.le_u
	   (if
	    (then
	     call $checkForInterrupts
	     return))))
	 return))

       local.get $firstInstructionByte
       i32.const 0xAB
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 i32.const 3
	 i32.and
	 i32.const 256
	 i32.mul
	 call $nextByte
	 i32.add
	 call $jumpIfTrue
	 return))

       local.get $firstInstructionByte
       i32.const 0xAF
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 i32.const 3
	 i32.and
	 i32.const 256
	 i32.mul
	 call $nextByte
	 i32.add
	 call $jumpIfFalse
	 return))

       local.get $firstInstructionByte
       i32.const 0xB0
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess
	 i32.const 0
	 call $setResultIsFloat

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.add
	 call $pop2AndPushNumResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xB1
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.sub
	 call $pop2AndPushNumResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))
       
       local.get $firstInstructionByte
       i32.const 0xB2
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.lt_u
	 call $pop2AndPushBoolResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xB3
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.gt_u
	 call $pop2AndPushBoolResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xB4
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.le_u
	 call $pop2AndPushBoolResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xB5
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.ge_u
	 call $pop2AndPushBoolResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xB6
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.eq
	 call $pop2AndPushBoolResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xB7
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.ne
	 call $pop2AndPushBoolResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xB8
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess
	 i32.const 0
	 call $setResultIsFloat

	 i32.const 1
	 call $stackIntOrFloat
	 i32.const 0
	 call $stackIntOrFloat
	 i32.mul
	 call $pop2AndPushNumResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xB9
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackInteger
	 i32.const 0
	 call $stackInteger
	 i32.div_u
	 call $pop2AndPushIntResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xBA
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackInteger
	 i32.const 0
	 call $stackInteger
	 call $mod
	 call $pop2AndPushIntResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xBB
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 i32.const 0
	 call $primitiveMakePoint
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xBC
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackInteger
	 i32.const 0
	 call $stackInteger
	 i32.shr_u
	 call $pop2AndPushIntResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xBD
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackInteger
	 i32.const 0
	 call $stackInteger
	 i32.div_u
	 call $pop2AndPushIntResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xBE
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackInteger
	 i32.const 0
	 call $stackInteger
	 i32.and
	 call $pop2AndPushIntResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xBF
       i32.eq

       (if
	(then
	 i32.const 1
	 call $setSuccess

	 i32.const 1
	 call $stackInteger
	 i32.const 0
	 call $stackInteger
	 i32.or
	 call $pop2AndPushIntResult
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $firstInstructionByte
	   i32.const 15
	   i32.and
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xCF
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 local.set $temp
	 call $theReceiver
	 local.get $temp
	 i32.const 15
	 i32.and
	 call $quickSendOther
	 i32.const 0
	 i32.eq

	 (if
	  (then
	   local.get $temp
	   i32.const 15
	   i32.and
	   i32.const 16
	   i32.add
	   call $sendSpecial
	   return))

	 return))

       local.get $firstInstructionByte
       i32.const 0xDF
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 i32.const 15
	 i32.and
	 call $methodGetSelector
	 i32.const 0
	 i32.const 0
	 call $send
	 return))

       local.get $firstInstructionByte
       i32.const 0xEF
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 i32.const 15
	 i32.and
	 call $methodGetSelector
	 i32.const 1
	 i32.const 0
	 call $send
	 return))

       local.get $firstInstructionByte
       i32.const 0xFF
       i32.le_u

       (if
	(then
	 local.get $firstInstructionByte
	 i32.const 15
	 i32.and
	 call $methodGetSelector
	 i32.const 2
	 i32.const 0
	 call $send
	 return))

       return))