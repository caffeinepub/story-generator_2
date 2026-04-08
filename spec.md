# Story Generator

## Current State
New project, no existing implementation.

## Requested Changes (Diff)

### Add
- Story type selector: fairy tale, horror, adventure, mystery (4 genre options)
- Character name text input
- Generate button that creates a short story based on selected genre + character name
- Story display area to show the generated story
- Download as PDF button (using browser print/jsPDF or similar)
- Backend: story generation logic that produces a short story given genre and character name

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: `generateStory(genre: Text, characterName: Text) -> async Text` - returns a short generated story
2. Frontend: Genre selector (4 pill/card buttons), character name input, generate button, story display card, download PDF button
3. PDF download: use browser's window.print() with print-specific CSS, or jsPDF library
