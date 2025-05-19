import React, { useEffect, useState } from 'react';
import ActivityCard from '../components/ActivityCard';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch('/api/activities');
                const data = await response.json();
                setActivities(data);
            } catch (error) {
                console.error('Error fetching activities:', error);
            }
        };

        fetchActivities();
    }, []);

    return (
        <div className="activities-page">
            <h1>Educational Activities</h1>
            <div className="activities-list">
                {activities.length > 0 ? (
                    activities.map(activity => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))
                ) : (
                    <p>No activities available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default Activities;