import { ServiceType, TariffType } from "../types";

import icon_preview from '../img/icon_preview.png';
import icon_montage from '../img/icon_montage.png';
import icon_scenario from '../img/icon_scenario.png';
import icon_slice_video from '../img/icon_slice_video.png';
import icon_subtitles from '../img/icon_subtitles.png';
import icon_technical_solutions from '../img/icon_technical_solutions.png';
import icon_transcription from '../img/icon_transcription.png';
import icon_translation from '../img/icon_translation.png';
import icon_voiceover from '../img/icon_voiceover.png';

import icon_preview_selected from '../img/icon_preview_selected.png';
import icon_montage_selected from '../img/icon_montage_selected.png';
import icon_scenario_selected from '../img/icon_scenario_selected.png';
import icon_slice_video_selected from '../img/icon_slice_video_selected.png';
import icon_subtitles_selected from '../img/icon_subtitles_selected.png';
import icon_technical_solutions_selected from '../img/icon_technical_solutions_selected.png';
import icon_transcription_selected from '../img/icon_transcription_selected.png';
import icon_translation_selected from '../img/icon_translation_selected.png';
import icon_voiceover_selected from '../img/icon_voiceover_selected.png';

import icon_basic from '../img/icon_basic.png';
import icon_beginners from '../img/icon_beginners.png';
import icon_consultation from '../img/icon_consultation.png';
import icon_shorts from '../img/icon_shorts.png';
import icon_shorts_pro from '../img/icon_shorts_pro.png';
import icon_starter from '../img/icon_starter.png';
import icon_youtube_pro from '../img/icon_youtube_pro.png';
import icon_youtube_pro_plus from '../img/icon_youtube_pro_plus.png';

import icon_basic_selected from '../img/icon_basic_selected.png';
import icon_beginners_selected from '../img/icon_beginners_selected.png';
import icon_consultation_selected from '../img/icon_consultation_selected.png';
import icon_shorts_selected from '../img/icon_shorts_selected.png';
import icon_shorts_pro_selected from '../img/icon_shorts_pro_selected.png';
import icon_starter_selected from '../img/icon_starter_selected.png';
import icon_youtube_pro_selected from '../img/icon_youtube_pro_selected.png';
import icon_youtube_pro_plus_selected from '../img/icon_youtube_pro_plus_selected.png';

export default function getIcon(productType: ServiceType | TariffType, selected: Boolean = false) {
  switch (productType) {
    case "preview": return selected ? icon_preview_selected : icon_preview
    case "montage": return selected ? icon_montage_selected : icon_montage
    case "scenario": return selected ? icon_scenario_selected : icon_scenario
    case "slice-video": return selected ? icon_slice_video_selected : icon_slice_video
    case "subtitles": return selected ? icon_subtitles_selected : icon_subtitles
    case "technical-solutions": return selected ? icon_technical_solutions_selected : icon_technical_solutions
    case "transcription": return selected ? icon_transcription_selected : icon_transcription
    case "translation": return selected ? icon_translation_selected : icon_translation
    case "voiceover": return selected ? icon_voiceover_selected : icon_voiceover
    case "basic": return selected ? icon_basic_selected : icon_basic
    case "beginners": return selected ? icon_beginners_selected : icon_beginners
    case "consultation": return selected ? icon_consultation_selected : icon_consultation
    case "shorts": return selected ? icon_shorts_selected : icon_shorts
    case "shorts-pro": return selected ? icon_shorts_pro_selected : icon_shorts_pro
    case "starter": return selected ? icon_starter_selected : icon_starter
    case "youtube-pro": return selected ? icon_youtube_pro_selected : icon_youtube_pro
    case "youtube-pro-plus": return selected ? icon_youtube_pro_plus_selected : icon_youtube_pro_plus
  }
}