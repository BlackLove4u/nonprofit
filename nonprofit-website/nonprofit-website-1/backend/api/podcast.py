from flask import Blueprint, request, jsonify
from models.podcast import Podcast

podcast_api = Blueprint('podcast_api', __name__)

@podcast_api.route('/podcasts', methods=['GET'])
def get_podcasts():
    podcasts = Podcast.query.all()
    return jsonify([podcast.to_dict() for podcast in podcasts]), 200

@podcast_api.route('/podcasts', methods=['POST'])
def create_podcast():
    data = request.json
    new_podcast = Podcast(
        title=data['title'],
        description=data['description'],
        audio_file_url=data['audio_file_url'],
        release_date=data['release_date']
    )
    new_podcast.save()
    return jsonify(new_podcast.to_dict()), 201

@podcast_api.route('/podcasts/<int:podcast_id>', methods=['PUT'])
def update_podcast(podcast_id):
    data = request.json
    podcast = Podcast.query.get_or_404(podcast_id)
    podcast.title = data['title']
    podcast.description = data['description']
    podcast.audio_file_url = data['audio_file_url']
    podcast.release_date = data['release_date']
    podcast.save()
    return jsonify(podcast.to_dict()), 200

@podcast_api.route('/podcasts/<int:podcast_id>', methods=['DELETE'])
def delete_podcast(podcast_id):
    podcast = Podcast.query.get_or_404(podcast_id)
    podcast.delete()
    return jsonify({'message': 'Podcast deleted successfully'}), 204