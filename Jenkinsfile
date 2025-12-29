pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('CheckOut Code') {
            steps{
                git branch: 'main',
                url: 'https://github.com/bhanuprakash515/ADmyBRAND-assignment.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage ('Check Node and npm Version') {
            steps {
                sh '''
                node -v
                npm -v
                '''
            }
        }

        stage('Build with Timeout') {
            options {
            timeout(time: 2, unit: 'MINUTES')
            }
            steps {
                sh 'npm run build'
            }
        }

    }
    post {
        success {
            echo ' Build pipeline completed successfully'
        }
        failure {
            echo ' Build pipeline failed'
        }
    }

}
