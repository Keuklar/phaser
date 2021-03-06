//  RESERVED properties that a Tween config object uses

//  completeDelay: The time the tween will wait before the onComplete event is dispatched once it has completed
//  delay: The time the tween will wait before it first starts
//  duration: The duration of the tween
//  ease: The ease function used by the tween
//  easeParams: The parameters to go with the ease function (if any)
//  hold: The time the tween will pause before running a yoyo
//  loop: The time the tween will pause before starting either a yoyo or returning to the start for a repeat
//  loopDelay: 
//  offset: 
//  paused: Does the tween start in a paused state, or playing?
//  props: The properties being tweened by the tween
//  repeat: The number of times the tween will repeat itself (a value of 1 means the tween will play twice, as it repeated once)
//  repeatDelay: The time the tween will pause for before starting a repeat. The tween holds in the start state.
//  startAt: 
//  targets: The targets the tween is updating.
//  useFrames: Use frames or milliseconds?
//  yoyo: boolean - Does the tween reverse itself (yoyo) when it reaches the end?

module.exports = [
    'completeDelay',
    'delay',
    'duration',
    'ease',
    'easeParams',
    'hold',
    'loop',
    'loopDelay',
    'offset',
    'paused',
    'props',
    'repeat',
    'repeatDelay',
    'startAt',
    'targets',
    'useFrames',
    'yoyo'
];
