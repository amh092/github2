import React from 'react'
import styles from './UserProfile.module.css'
import location from '../../assets/icon-location.svg'
import website from '../../assets/icon-website.svg'
import twitter from '../../assets/icon-twitter.svg'
import company from '../../assets/icon-company.svg'
const UserProfile = (props) => {
    return (
        <div  className={`${styles['user-profile']} ${styles[props.mode]}`}>
          <section className={`${styles['user-header']} ${styles[props.mode]}`}>
            <img src={props.image}/>

            <section className={styles['user-info']}>
                <h1 className={styles['name']}>{props.name}</h1>
                <h1 className={styles['user-name']}>{props.userName}</h1>
                <h1 className={styles['join-date']}>{props.joinDate}</h1>
            </section>

          </section>  

          <p  className={`${styles['user-brief']} ${styles[props.mode]}`}> 
        {props.brief}
          </p>

          <section className={`${styles['statistics']} ${styles[props.mode]}`}>
            <div className={styles['reps']}>
                <h1>Repos</h1>
                <h1>{props.repo}</h1>
            </div>
            <div className={styles['followers']}>
                <h1>followers</h1>
                <h1>{props.followers}</h1>
            </div>
            <div className={styles['following']}>
                <h1>following</h1>
                <h1>{props.following}</h1>
            </div>
          </section>

          <section className={`${styles['links']} ${styles[props.mode]}`}>
                <div className={styles['location']}>
                    <img src={location}/>
                    <h1 className={styles['link-location']}>{props.location}</h1>
                </div>
        
                <div className={styles['website']}>
                    <img src={website}/>
                    <a className={styles['website-link']} href={props.website}>{props.website}</a>
                </div>

                <div className={styles['twitter']}>
                    <img src={twitter}/>
                    <a href={'https://twitter.com/'+props.twitter}  target='_blank' className={styles['link']}>{props.twitter}</a>
                </div>
                
                <div className={styles['company']}>
                    <img src={company}/>
                    <a href={props.company} className={styles['link']}>{props.company}</a>
                </div>

          </section>
        </div>
    )
}

export default UserProfile
