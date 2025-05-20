from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Blog(Base):
    __tablename__ = 'blogs'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    date_created = Column(DateTime, default=datetime.utcnow)
    author = Column(String(100), nullable=False)

    def __repr__(self):
        return f"<Blog(title={self.title}, author={self.author}, date_created={self.date_created})>"