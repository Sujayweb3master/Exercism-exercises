// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position (x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800,600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    handleResize(this.position, this.screenSize, this.size, newSize, 'width', 'x')
    handleResize(this.position, this.screenSize, this.size, newSize, 'height', 'y')
  }

  move(newPosition) {
    hanelePositionChange(this.size, this.screenSize, this.position, newPosition, 'x', 'width');
    hanelePositionChange(this.size, this.screenSize, this.position, newPosition, 'y', 'height');
  }
}

export function handleResize (windowPosition, screenSize, windowSize, resizeData, dimension, coordinate ) {
  if (resizeData[dimension] < 1) {
    windowSize[dimension] = 1
  } else {
    if (resizeData[dimension] > (screenSize[dimension] - windowPosition[coordinate])) {
    windowSize[dimension] = screenSize[dimension] - windowPosition[coordinate];
  } else {
    windowSize[dimension] = resizeData[dimension]
  }
  }
  
}

export function hanelePositionChange (windowSize, screenSize, currentPosition, newPosition, coordinate, dimension) {
  
  if (newPosition[coordinate] < 0) {
    currentPosition[coordinate] = 0
  } else {
    if (newPosition[coordinate] > (screenSize[dimension] - windowSize[dimension])) {
      currentPosition[coordinate] = screenSize[dimension] - windowSize[dimension]
    } else {
      currentPosition[coordinate] = newPosition[coordinate]
    }
  }
}

export function changeWindow (newProgramWindow) {
  console.log('newProgramWindow', newProgramWindow)
  console.log('newProgramWindow', newProgramWindow.resize)
  newProgramWindow.resize({width: 400, height: 300})
  newProgramWindow.move({x:100, y:150})
  console.log('newProgramWindow', newProgramWindow)
  console.log('newProgramWindow', newProgramWindow.size.width)
  return newProgramWindow;
}