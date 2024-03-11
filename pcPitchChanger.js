
/*:
 * @target MV MZ
 * @plugindesc Changes BGM pitch without restarting the music
 * @author ronald9954
 *
 * @help pcPitchChanger.js
 * ver. 1.0.0
 * 
 * 
 * You can adjust pitch BGM through script call, without restarting the BGM.
 * 
 * Example:
 * 
 * Raises the pitch by 10
 * pc.increaseBGMPitch(10)
 * 
 * Lower the pitch by 10
 * pc.increaseBGMPitch(-10)
 * 
 * Set pitch to 80
 * pc.setBGMPitch(80)
 * 
 * Get curretn BGM pitch as a variable
 * var currentBGMPitch = pc.getCurrentBGMPitch()
 * 
 * 
 * Should apply to both MV and MZ
 * 
 * 
 * 
 */


var pc = pc || {};

(function () {

    /**
     * Prints "Hello World" to the console.
     */
    pc.increaseBGMPitch = function (diff) {
        var timeSave = AudioManager._bgmBuffer.seek();
        var nowBgm = AudioManager._currentBgm;
        nowBgm.pitch = Math.max(0, nowBgm.pitch + diff);
        AudioManager.playBgm(nowBgm, nowBgm.pos);
        AudioManager._bgmBuffer.play(true, timeSave);
    };
    pc.setBGMPitch = function (pitch) {
        var timeSave = AudioManager._bgmBuffer.seek();
        var nowBgm = AudioManager._currentBgm;
        nowBgm.pitch = Math.max(0, pitch);
        AudioManager.playBgm(nowBgm, nowBgm.pos);
        AudioManager._bgmBuffer.play(true, timeSave);
    };

    pc.getCurrentBGMPitch = function () {
        if (AudioManager._currentBgm) {
            return AudioManager._currentBgm.pitch;
        } else {
            console.log("No BGM is currently playing.");
            return 0; 
        }
    };

    // You can add more functions to the pc object here.

})();

