// Web Audio API Romantic Ambient Music Generator & Player
class RomanticAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private htmlAudio: HTMLAudioElement | null = null;
  private useSynth: boolean = false;

  constructor() {
    // Try loading audio element
    this.htmlAudio = new Audio('/audio/our-song.mp3');
    this.htmlAudio.loop = true;
    this.htmlAudio.volume = 0.4;
    this.htmlAudio.onerror = () => {
      this.useSynth = true;
    };
  }

  public async togglePlay(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      await this.play();
      return true;
    }
  }

  public async play() {
    try {
      if (this.htmlAudio && !this.useSynth) {
        await this.htmlAudio.play();
        this.isPlaying = true;
        return;
      }
    } catch {
      this.useSynth = true;
    }

    // Fallback to Web Audio API ambient music synth
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    this.isPlaying = true;
    this.startAmbientLoop();
  }

  public pause() {
    if (this.htmlAudio) {
      this.htmlAudio.pause();
    }
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    this.isPlaying = false;
  }

  public getIsPlaying() {
    return this.isPlaying;
  }

  private startAmbientLoop() {
    // Gentle relaxing romantic pentatonic frequencies (C major / A minor warm chords)
    const chords = [
      [261.63, 329.63, 392.00, 523.25], // C major
      [220.00, 261.63, 329.63, 440.00], // A minor
      [349.23, 440.00, 523.25, 659.25], // F major
      [392.00, 493.88, 587.33, 783.99]  // G major
    ];

    let chordIndex = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx) return;
      const notes = chords[chordIndex];
      chordIndex = (chordIndex + 1) % chords.length;

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.2);

        // Soft envelope
        gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.2);
        gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + idx * 0.2 + 1.0);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + idx * 0.2 + 5.0);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.2);
        osc.stop(this.ctx.currentTime + idx * 0.2 + 5.5);
      });
    };

    playChord();
    this.timer = window.setInterval(playChord, 5000);
  }
}

export const romanticAudio = new RomanticAudioPlayer();
