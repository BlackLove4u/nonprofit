from flask import Blueprint, request, jsonify
from models.blog import Blog
from datetime import datetime

blog_bp = Blueprint('blog', __name__)

# In-memory storage for demonstration purposes
blogs = []

@blog_bp.route('/blogs', methods=['GET'])
def get_blogs():
    return jsonify(blogs), 200

@blog_bp.route('/blogs', methods=['POST'])
def create_blog():
    data = request.json
    new_blog = {
        'id': len(blogs) + 1,
        'title': data['title'],
        'content': data['content'],
        'date': datetime.utcnow().isoformat(),
        'author': data['author']
    }
    blogs.append(new_blog)
    return jsonify(new_blog), 201

@blog_bp.route('/blogs/<int:blog_id>', methods=['GET'])
def get_blog(blog_id):
    blog = next((b for b in blogs if b['id'] == blog_id), None)
    if blog is None:
        return jsonify({'error': 'Blog not found'}), 404
    return jsonify(blog), 200

@blog_bp.route('/blogs/<int:blog_id>', methods=['PUT'])
def update_blog(blog_id):
    data = request.json
    blog = next((b for b in blogs if b['id'] == blog_id), None)
    if blog is None:
        return jsonify({'error': 'Blog not found'}), 404
    blog['title'] = data.get('title', blog['title'])
    blog['content'] = data.get('content', blog['content'])
    blog['author'] = data.get('author', blog['author'])
    return jsonify(blog), 200

@blog_bp.route('/blogs/<int:blog_id>', methods=['DELETE'])
def delete_blog(blog_id):
    global blogs
    blogs = [b for b in blogs if b['id'] != blog_id]
    return jsonify({'message': 'Blog deleted'}), 204