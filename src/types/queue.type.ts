import { AudioPlayer } from '@discordjs/voice';
import { User } from 'discord.js';

export interface Queue {
  songs: Array<Song>;
  currentSong?: Song;
  loopMode: LoopMode;
  audioPlayer?: AudioPlayer;
}

export interface Song {
  title: string;
  url: string;
  duration: number;
  channelName: string;
  thumbnailUrl: string;
  requester: User;
}

export enum LoopMode {
  NO_LOOP,
  LOOP_SONG,
  LOOP_QUEUE,
}