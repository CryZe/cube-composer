module Levels.Chapter4 where

import Prelude
import Data.List
import Data.Maybe

import Helper
import Transformer
import Types

cxToX :: Stack -> Stack
cxToX Nil                     = Nil
cxToX (Cons Cyan (Cons y xs)) = y : cxToX xs
cxToX (Cons x xs)             = x : cxToX xs

ooToC :: Stack -> Stack
ooToC Nil                            = Nil
ooToC (Cons Orange (Cons Orange xs)) = Cyan : ooToC xs
ooToC (Cons x cs)                    = x : ooToC cs

chapter4 :: Chapter
chapter4 = {
    name: "Chapter 4",

    transformers: fromArray [
        "mapXtoOX" :> {
            name: "map {X}↦[{X}{Orange}]",
            function: map (concatMap (\x -> (Orange : x : Nil)))
        },
        "mapCXtoX" :> {
            name: "map [{X}{Cyan}]↦{X}",
            function: map cxToX
        },
        "mapOOtoC" :> {
            name: "map [{Orange}{Orange}]↦{Cyan}",
            function: map ooToC
        },
        "mapCtoO" :> {
            name: "map {Cyan}↦{Orange}",
            function: replaceSingle Cyan Orange
        },
        "rejectSizeG2" :> {
            name: "reject (size > 2)",
            function: reject (\x -> length x > 2)
        }
    ],

    levels: fromArray [
        "4.1" :-> {
            name: "Brick",
            help: Just """This chapter introduces wildcard cubes: {X}.""",
            difficulty: Easy,
            initial: [[Cyan, Orange], [Cyan, Cyan, Orange], [Orange, Orange], [Cyan, Cyan, Orange], [Cyan, Orange]],
            target: [[Cyan], [Cyan, Orange], [Cyan], [Cyan, Orange], [Cyan]]
        },
        "4.2" :-> {
            name: "Fort",
            help: Just """This is the last level ... for now. You can help to create new puzzles!
                          Send a pull request on
                          <a href="https://github.com/sharkdp/cube-composer">Github</a>. Either way,
                          I hope you enjoyed the game.""",
            difficulty: Hard,
            initial: [[Cyan, Orange], [Cyan, Cyan, Orange], [Orange, Orange], [Cyan, Cyan, Orange], [Cyan, Orange]],
            target: [[Orange, Cyan], [Orange, Orange], [Orange, Cyan], [Orange, Orange], [Orange, Cyan]]
        },
        "4.3" :-> {
          name: "Okok",
          help: Just """Just do it.""",
          difficulty: Easy,
          initial: [[Orange, Cyan, Orange, Cyan], [Brown, Orange, Cyan], [Orange, Brown, Brown], [Brown, Orange, Cyan], [Orange, Cyan, Orange, Cyan]],
          target: [[Orange, Orange], [Brown, Orange, Orange], [Orange, Brown, Brown], [Brown, Orange, Orange], [Orange, Orange]]
        }
    ]
}
