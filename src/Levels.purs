module Levels where

import Prelude
import Data.List
import Data.Foldable
import Data.Maybe
import qualified Data.StrMap as SM

import Types
import Unsafe

import Levels.Chapter0
import Levels.Chapter1
import Levels.Chapter2
import Levels.Chapter3
import Levels.Chapter4

-- | A simple list of all available chapters
allChapters :: List Chapter
allChapters = chapter0 : chapter1 : chapter2 : chapter3 : chapter4 : Nil

-- | A dictionary of all available levels across the chapters
allLevels :: SM.StrMap Level
allLevels = SM.unions (map _.levels allChapters)

-- | A list of all level ids across the chapters
allLevelIds :: List LevelId
allLevelIds = allChapters >>= (_.levels >>> SM.keys >>> toList) >>> sort

-- | ID of the first level
firstLevel :: LevelId
firstLevel = fromMaybe "" (head allLevelIds)

-- | Find a given level by its id
getLevel :: LevelId -> Level
getLevel lid =
    case (SM.lookup lid allLevels) of
         Just level -> level
         Nothing -> unsafeError $ "Could not find level " ++ show lid

-- | Level id, name and difficulty as a single string
levelTitle :: LevelId -> Level -> String
levelTitle lid level = lid ++ " - " ++ level.name ++ " (" ++ show level.difficulty ++ ")"

-- | Get the chapter to which a level belongs
getChapter :: LevelId -> Chapter
getChapter lid =
    case (find hasLevel allChapters) of
         Just chapter -> chapter
         Nothing -> unsafeError $ "Could not find chapter " ++ show lid
    where hasLevel ch = SM.member lid ch.levels

-- | Find a specific transformer + metadata by its id
getTransformerRecord :: Chapter -> TransformerId -> Maybe TransformerRecord
getTransformerRecord chapter tid = SM.lookup tid chapter.transformers

-- | Find a specific transformer by its id
getTransformer :: Chapter -> TransformerId -> Maybe Transformer
getTransformer ch tid = _.function <$> getTransformerRecord ch tid
