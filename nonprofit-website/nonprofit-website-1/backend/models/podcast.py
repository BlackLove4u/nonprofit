class Podcast:
    def __init__(self, title, description, audio_file_url, release_date):
        self.title = title
        self.description = description
        self.audio_file_url = audio_file_url
        self.release_date = release_date

    def to_dict(self):
        return {
            "title": self.title,
            "description": self.description,
            "audio_file_url": self.audio_file_url,
            "release_date": self.release_date
        }